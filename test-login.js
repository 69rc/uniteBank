// Simple login test
import fetch from 'node-fetch';

async function testLogin() {
  try {
    console.log('Testing admin login...');
    
    const response = await fetch('http://localhost:5001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@bank.com',
        password: 'admin123'
      })
    });
    
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Login successful');
      console.log('User data:', data);
    } else {
      const error = await response.text();
      console.log('❌ Login failed');
      console.log('Error:', error);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testLogin();