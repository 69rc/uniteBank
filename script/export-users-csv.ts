import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs/promises';
import * as path from 'path';

async function exportUsersToCSV() {
  try {
    // Load environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) {
      throw new Error('❌ NEXT_PUBLIC_SUPABASE_URL environment variable is required');
    }

    if (!supabaseServiceRoleKey) {
      throw new Error('❌ SUPABASE_SERVICE_ROLE_KEY environment variable is required');
    }

    console.log('🔄 Connecting to Supabase...');
    const adminClient = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });
    
    console.log('📚 Fetching users from database...');
    const { data: users, error } = await adminClient
      .from('users')
      .select('*')
      .order('id', { ascending: true }); // Order by ID for consistency

    if (error) {
      throw new Error(`❌ Error fetching users: ${error.message}`);
    }

    if (!users || users.length === 0) {
      console.log('⚠️ No users found in the database');
      return;
    }

    console.log(`✅ Found ${users.length} users`);

    // Define CSV headers based on your schema
    const headers = [
      'id',
      'first_name',
      'last_name', 
      'other_name',
      'email',
      'phone',
      'dob',
      'gender',
      'nationality',
      'address',
      'city',
      'state',
      'country',
      'zip_code',
      'id_type',
      'id_number',
      'id_expiry_date',
      'id_image_url',
      'selfie_url',
      'account_type',
      'currency',
      'account_purpose',
      'password',
      'transaction_pin',
      'role',
      'status',
      'isEmailVerified',
      'account_number',
      'customer_id',
      'balance',
      'created_at'
    ];

    // Convert data to CSV rows
    const csvRows = [headers.join(',')]; // Header row
    
    for (const user of users) {
      const row = headers.map(header => {
        // Map snake_case headers to camelCase object properties
        const propertyMap: Record<string, string> = {
          'first_name': 'firstName',
          'last_name': 'lastName',
          'other_name': 'otherName',
          'zip_code': 'zipCode',
          'id_type': 'idType',
          'id_number': 'idNumber',
          'id_expiry_date': 'idExpiryDate',
          'id_image_url': 'idImageUrl',
          'account_type': 'accountType',
          'account_purpose': 'accountPurpose',
          'transaction_pin': 'transactionPin',
          'isEmailVerified': 'isEmailVerified',
          'account_number': 'accountNumber',
          'customer_id': 'customerId',
          'created_at': 'createdAt'
        };
        
        const property = propertyMap[header] || header;
        let value = user[property];
        
        // Handle null/undefined values
        if (value === null || value === undefined) {
          return '';
        }
        
        // Convert dates to ISO format if needed
        if (value instanceof Date) {
          return value.toISOString();
        }
        
        // Escape commas and quotes for CSV safety
        value = String(value);
        if (value.includes(',') || value.includes('"') || value.includes('\n')) {
          value = `"${value.replace(/"/g, '""')}"`;
        }
        
        return value;
      });
      
      csvRows.push(row.join(','));
    }

    // Create CSV content
    const csvContent = csvRows.join('\n');
    
    // Define output file path (in the current directory)
    const outputPath = path.join(process.cwd(), 'seed-users.csv');
    
    // Write CSV file
    await fs.writeFile(outputPath, csvContent, 'utf-8');
    
    console.log(`✅ Users exported successfully to: ${outputPath}`);
    console.log(`📊 Total users exported: ${users.length}`);
    console.log('\n📝 Instructions for uploading to Supabase:');
    console.log('1. Go to your Supabase dashboard');
    console.log('2. Navigate to the "SQL Editor" or "Table Editor"');
    console.log('3. You can either:');
    console.log('   - Use the SQL Editor and run an INSERT script, or');
    console.log('   - Use the Table Editor to import the CSV directly');
    console.log('4. If using CSV import, make sure your table is named "users"');
    console.log('5. The CSV columns map to the users table schema');
    
  } catch (error) {
    console.error('❌ Error exporting users to CSV:', error);
    process.exit(1);
  }
}

// Run the export function
exportUsersToCSV();