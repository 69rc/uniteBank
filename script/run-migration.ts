import 'dotenv/config';
import { Client } from 'pg';
import fs from 'fs';
import path from 'path';

async function runMigration() {
    console.log('--- RUNNING MANUAL MIGRATION (Robust with DROP) ---');

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();

        console.log('Dropping existing transfers table...');
        await client.query('DROP TABLE IF EXISTS "transfers" CASCADE');

        // Read the migration file
        const migrationFile = path.join(process.cwd(), 'migrations', '0002_add_transfers_table.sql');
        const sql = fs.readFileSync(migrationFile, 'utf8');

        const statements = sql.split('--> statement-breakpoint').map(s => s.trim()).filter(s => s.length > 0);

        for (const stmt of statements) {
            console.log(`Executing: ${stmt.substring(0, 50)}...`);
            try {
                await client.query(stmt);
                console.log('  -> Success');
            } catch (e: any) {
                console.log(`  -> Failed (Ignored): ${e.message}`);
            }
        }

        console.log('Reloading schema cache...');
        await client.query("NOTIFY pgrst, 'reload schema'");
        console.log('✅ Migration process completed');
    } catch (err) {
        console.error('❌ Migration Failed Fatal', err);
    } finally {
        await client.end();
    }
}

runMigration();
