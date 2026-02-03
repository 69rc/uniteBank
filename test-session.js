// Simple test to verify session functionality
const fetch = require('node-fetch');

async function testSession() {
  try {
    console.log('Testing session functionality...');
    
    // Test login endpoint (which uses sessions)
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'john.doe@example.com',
        password: 'user123'
      })
    });
    
    console.log('Login Status:', response.status);
    
    if (response.ok) {
      console.log('✅ Session functionality is working');
      const data = await response.json();
      console.log('User:', data.firstName, data.lastName);
    } else {
      const error = await response.text();
      console.log('❌ Login failed:', error);
    }
  } catch (error) {
    console.error('Error testing session:', error.message);
  }
}

testSession();