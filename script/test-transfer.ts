import 'dotenv/config';
import fetch, { Headers, Request, Response } from 'node-fetch';

if (!globalThis.fetch) {
    globalThis.fetch = fetch as any;
    globalThis.Headers = Headers as any;
    globalThis.Request = Request as any;
    globalThis.Response = Response as any;
}

const BASE_URL = 'http://localhost:3000/api';

function randomAccount() {
    return Math.floor(Math.random() * 10000000000).toString().padStart(10, '0');
}

async function runTest() {
    console.log('--- STARTING TRANSFER TEST ---');

    // Dynamic imports to ensure polyfills apply first
    const { adminStorage } = await import('../server/admin-storage');
    const { storage } = await import('../server/storage.supabase');

    // 1. Setup Data
    console.log('1. Setting up Test Users...');
    const senderEmail = `sender_${Date.now()}@test.com`;
    const recipientEmail = `recipient_${Date.now()}@test.com`;

    const senderAcc = randomAccount();
    const recipientAcc = randomAccount();

    // Create Sender
    let sender = await adminStorage.createUser({
        firstName: 'Sender',
        lastName: 'User',
        email: senderEmail,
        phone: '1234567890',
        dob: '2000-01-01',
        gender: 'Male',
        nationality: 'Test',
        address: 'Test Addr',
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        zipCode: '12345',
        idType: 'Passport',
        idNumber: 'A12345678',
        idExpiryDate: '2030-01-01',
        accountType: 'SAVINGS',
        password: 'password123',
        transactionPin: '1234',
        role: 'USER',
        status: 'APPROVED',
        balance: '1000.00',
        accountNumber: senderAcc,
        customerId: 'CUST_' + senderAcc
    });
    console.log(`Created Sender: ${sender.firstName} (${sender.accountNumber}) - Bal: ${sender.balance}`);

    // Create Recipient
    let recipient = await adminStorage.createUser({
        firstName: 'Recipient',
        lastName: 'User',
        email: recipientEmail,
        phone: '0987654321',
        dob: '2000-01-01',
        gender: 'Female',
        nationality: 'Test',
        address: 'Test Addr 2',
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        zipCode: '54321',
        idType: 'Passport',
        idNumber: 'B87654321',
        idExpiryDate: '2030-01-01',
        accountType: 'SAVINGS',
        password: 'password123',
        transactionPin: '4321',
        role: 'USER',
        status: 'APPROVED',
        balance: '50.00',
        accountNumber: recipientAcc,
        customerId: 'CUST_' + recipientAcc
    });
    console.log(`Created Recipient: ${recipient.firstName} (${recipient.accountNumber}) - Bal: ${recipient.balance}`);

    // 2. Name Enquiry
    console.log('\n2. Testing Name Enquiry...');
    const fetchedUser = await adminStorage.getUserByAccountNumber(recipient.accountNumber!);
    if (fetchedUser && fetchedUser.firstName === 'Recipient') {
        console.log('✅ Name Enquiry Passed');
    } else {
        console.error('❌ Name Enquiry Failed');
    }

    // 3. Create Transfer Request
    console.log('\n3. Creating Transfer Request (Sender -> Recipient, $100)...');
    const transfer = await storage.createTransfer({
        sender_id: sender.id,
        recipient_id: recipient.id,
        amount: '100.00',
        description: 'Test Transfer',
        status: 'PENDING'
    });
    console.log(`Transfer Created: ID ${transfer.id}, Status: ${transfer.status}`);

    // 4. Admin List Pending
    console.log('\n4. Verifying Pending List...');
    const pending = await adminStorage.getAllPendingTransfers();
    const found = pending.find(t => t.id === transfer.id);
    if (found) {
        console.log('✅ Transfer found in pending list');
    } else {
        console.error('❌ Transfer NOT found in pending list');
        // console.log("Pending list:", JSON.stringify(pending, null, 2));
    }

    // 5. Admin Approve
    console.log('\n5. Approving Transfer...');
    const adminId = 'admin-system';
    await adminStorage.approveTransfer(transfer.id, adminId);
    console.log('Transfer Approved.');

    // 6. Verify Balances
    console.log('\n6. Verifying Balances...');
    const updatedSender = await adminStorage.getUserByUuid(sender.id);
    const updatedRecipient = await adminStorage.getUserByUuid(recipient.id);

    console.log(`Sender New Balance: ${updatedSender?.balance} (Expected 900.00)`);
    console.log(`Recipient New Balance: ${updatedRecipient?.balance} (Expected 150.00)`);

    if (updatedSender?.balance === '900.00' && updatedRecipient?.balance === '150.00') {
        console.log('✅ Balances Updated Correctly');
    } else {
        console.error('❌ Balance mismatch');
    }

    // 7. Verify Transactions
    console.log('\n7. Verifying Transaction Records...');
    const senderTx = await adminStorage.getTransactionsByUserUuid(sender.id);
    const recipientTx = await adminStorage.getTransactionsByUserUuid(recipient.id);

    const debit = senderTx.find(t => t.type === 'DEBIT' && t.amount === '100.00');
    const credit = recipientTx.find(t => t.type === 'CREDIT' && t.amount === '100.00');

    if (debit) console.log('✅ Sender Debit Record Found');
    else console.error('❌ Sender Debit Record MISSING');

    if (credit) console.log('✅ Recipient Credit Record Found');
    else console.error('❌ Recipient Credit Record MISSING');

    console.log('\n--- TEST COMPLETED ---');
}

runTest().catch(console.error).finally(() => process.exit());
