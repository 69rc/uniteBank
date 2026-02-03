// Simple test script to verify logout endpoint
const fetch = require('node-fetch');

async function testLogout() {
  try {
    console.log('Testing logout endpoint...');
    
    const response = await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));
    
    if (response.ok) {
      console.log('✅ Logout endpoint is working');
    } else {
      console.log('❌ Logout endpoint failed');
    }
  } catch (error) {
    console.error('Error testing logout:', error.message);
  }
}

testLogout();