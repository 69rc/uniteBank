// Test transaction creation
import fetch from 'node-fetch';

async function testTransaction() {
  try {
    console.log('Testing transaction creation...');
    
    // First login as admin
    console.log('1. Logging in as admin...');
    const loginResponse = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@bank.com',
        password: 'admin123'
      })
    });
    
    if (!loginResponse.ok) {
      console.log('❌ Admin login failed');
      const error = await loginResponse.text();
      console.log('Login error:', error);
      return;
    }
    
    console.log('✅ Admin login successful');
    
    // Get cookies for session
    const cookies = loginResponse.headers.get('set-cookie');
    console.log('Session cookies:', cookies);
    
    // Create a transaction
    console.log('2. Creating transaction...');
    const transactionData = {
      userId: 2, // John Doe's ID
      type: "CREDIT",
      amount: 100.50, // This will be converted to string by the schema
      description: "Test deposit via API"
    };
    
    console.log('Transaction data:', transactionData);
    
    const transactionResponse = await fetch('http://localhost:5001/api/admin/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookies || ''
      },
      body: JSON.stringify(transactionData)
    });
    
    console.log('Transaction Status:', transactionResponse.status);
    
    if (transactionResponse.ok) {
      const result = await transactionResponse.json();
      console.log('✅ Transaction created successfully');
      console.log('Transaction:', result);
    } else {
      const error = await transactionResponse.json();
      console.log('❌ Transaction creation failed');
      console.log('Error:', error);
    }
    
  } catch (error) {
    console.error('Error testing transaction:', error.message);
  }
}

testTransaction();