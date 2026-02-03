// Test registration endpoint
const fetch = require('node-fetch');

async function testRegistration() {
  try {
    console.log('Testing registration endpoint...');
    
    const testUser = {
      firstName: "Jane",
      lastName: "Test",
      otherName: "",
      email: "jane.test@example.com",
      phone: "+1234567890",
      dob: "1992-05-15",
      gender: "Female",
      nationality: "American",
      address: "789 Oak Street",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
      idType: "Driver License",
      idNumber: "DL123456789",
      idExpiryDate: "2030-05-15",
      accountType: "SAVINGS",
      currency: "USD",
      accountPurpose: "Personal savings",
      password: "mypassword123",
      transactionPin: "1234"
    };
    
    console.log('Sending registration data...');
    
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testUser)
    });
    
    console.log('Registration Status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Registration successful');
      console.log('Response:', data);
    } else {
      const error = await response.json();
      console.log('❌ Registration failed');
      console.log('Error:', error);
    }
  } catch (error) {
    console.error('Error testing registration:', error.message);
  }
}

testRegistration();