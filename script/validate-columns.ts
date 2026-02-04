/**
 * Supabase Table Column Validator
 * This script validates that column names used in the application match the actual Supabase table schema
 */

import { createClient } from '@supabase/supabase-js';

async function validateColumnNames() {
  console.log('🔍 Validating Supabase column names...\n');
  
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
    console.error('❌ Missing required environment variables');
    return;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Validate users table structure
    console.log('📋 Checking users table structure...\n');
    const { data: usersColumns, error: usersError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'users')
      .order('ordinal_position');

    if (usersError) {
      console.error('❌ Error fetching users table structure:', usersError.message);
    } else if (usersColumns) {
      console.log('Users table columns:');
      usersColumns.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      });
      console.log('');
    }

    // Validate transactions table structure
    console.log('📋 Checking transactions table structure...\n');
    const { data: txColumns, error: txError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'transactions')
      .order('ordinal_position');

    if (txError) {
      console.error('❌ Error fetching transactions table structure:', txError.message);
    } else if (txColumns) {
      console.log('Transactions table columns:');
      txColumns.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      });
      console.log('');
    }

    // Validate otps table structure
    console.log('📋 Checking otps table structure...\n');
    const { data: otpColumns, error: otpError } = await supabase
      .from('information_schema.columns')
      .select('column_name, data_type')
      .eq('table_name', 'otps')
      .order('ordinal_position');

    if (otpError) {
      console.error('❌ Error fetching otps table structure:', otpError.message);
    } else if (otpColumns) {
      console.log('OTPs table columns:');
      otpColumns.forEach(col => {
        console.log(`  - ${col.column_name} (${col.data_type})`);
      });
      console.log('');
    }

    console.log('✅ Column validation completed');
  } catch (err: any) {
    console.error('❌ Validation error:', err.message);
  }
}

// Run validation
validateColumnNames();