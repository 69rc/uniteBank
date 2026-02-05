import { NextRequest } from 'next/server';
import { api } from '@shared/routes';
import { adminStorage } from '@server/storage';
import { hashPassword } from '../../utils/auth';
import { generateAccountNumber, generateCustomerId } from '../../utils/user';
import { sendOtpEmail } from '@server/mailer';

export async function POST(request: NextRequest) {
  try {
    const input = api.auth.register.input.parse(await request.json());
    console.log("Registration input received:", JSON.stringify(input, null, 2));

    const existing = await adminStorage.getUserByEmail(input.email);
    if (existing) {
      return Response.json({ message: "Email already registered" }, { status: 400 });
    }

    const hashedPassword = await hashPassword(input.password);
    const accountNumber = generateAccountNumber();
    const customerId = generateCustomerId();

    const userToCreate = {
      ...input,
      password: hashedPassword,
      accountNumber,
      customerId,
      role: "USER",
      status: "PENDING",
      balance: "0.00",
      // isEmailVerified: true,
    };

    const dbPayload = {
      first_name: userToCreate.firstName,
      last_name: userToCreate.lastName,
      other_name: userToCreate.otherName ?? null,
      email: userToCreate.email,
      phone: userToCreate.phone,
      dob: userToCreate.dob,
      gender: userToCreate.gender,
      nationality: userToCreate.nationality,
      address: userToCreate.address,
      city: userToCreate.city,
      state: userToCreate.state,
      country: userToCreate.country,
      zip_code: userToCreate.zipCode,
      id_type: userToCreate.idType,
      id_number: userToCreate.idNumber,
      id_expiry_date: userToCreate.idExpiryDate,
      id_image_url: userToCreate.idImageUrl ?? null,
      selfie_url: userToCreate.selfieUrl ?? null,
      account_type: userToCreate.accountType,
      currency: userToCreate.currency,
      account_purpose: userToCreate.accountPurpose ?? null,
      password: userToCreate.password,
      transaction_pin: userToCreate.transactionPin,
      role: userToCreate.role,
      status: userToCreate.status,
      // "isEmailVerified": userToCreate.isEmailVerified,
      account_number: userToCreate.accountNumber,
      customer_id: userToCreate.customerId,
      balance: userToCreate.balance,
    };

    console.log("Creating user with data:", JSON.stringify(userToCreate, null, 2));

    const user = await adminStorage.createUser(dbPayload);

    // Skip OTP generation since we're bypassing email verification
    // try {
    //   await sendOtpEmail(user.email, code, "EMAIL_VERIFICATION");
    //   console.log(`[OTP EMAIL SENT] To: ${user.email}`);
    // } catch (emailErr) {
    //   console.error("Failed to send OTP email", emailErr);
    //   return Response.json({
    //     message:
    //       "User created but we could not send the verification email. Please try again later.",
    //   }, { status: 500 });
    // }

    return Response.json({
      message: "Application received. Please wait for admin approval before logging in.",
      email: user.email
    }, { status: 201 });
  } catch (err: any) {
    console.error("Registration error:", err);
    if (err.name === 'ZodError') {
      return Response.json({ message: err.errors[0].message }, { status: 400 });
    } else {
      return Response.json({ message: err.message || "Internal server error" }, { status: 500 });
    }
  }
}