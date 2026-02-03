import nodemailer, { type Transporter } from "nodemailer";

type MailConfig = {
  host?: string;
  port: number;
  user?: string;
  pass?: string;
  from?: string;
  service?: string;
};

type OtpPurpose = "EMAIL_VERIFICATION" | "PASSWORD_RESET";

function getMailConfig(): MailConfig {
  return {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.EMAIL_FROM,
    service: process.env.SMTP_SERVICE,
  };
}

let transporter: Transporter | null = null;

function getTransporter(config: MailConfig): Transporter {
  if (!(config.service || config.host) || !config.user || !config.pass) {
    throw new Error(
      "SMTP configuration is incomplete. Please set SMTP credentials (e.g. SMTP_HOST/PORT or SMTP_SERVICE) along with SMTP_USER and SMTP_PASS."
    );
  }

  if (!transporter) {
    const baseOptions: any = {
      auth: {
        user: config.user,
        pass: config.pass,
      },
    };

    if (config.service) {
      baseOptions.service = config.service;
    } else {
      baseOptions.host = config.host;
      baseOptions.port = config.port;
      baseOptions.secure = config.port === 465;
    }

    transporter = nodemailer.createTransport(baseOptions);
  }

  return transporter;
}

function getCopy(purpose: OtpPurpose) {
  if (purpose === "PASSWORD_RESET") {
    return {
      subject: "Reset your UnitedHorizon password",
      title: "Password reset request",
      body: "Use the verification code below to reset your password. This code expires in 5 minutes.",
    };
  }
  return {
    subject: "Verify your UnitedHorizon account",
    title: "Verify your email",
    body: "Use the verification code below to complete your registration. This code expires in 5 minutes.",
  };
}

export async function sendOtpEmail(to: string, code: string, purpose: OtpPurpose = "EMAIL_VERIFICATION") {
  const config = getMailConfig();
  const mailer = getTransporter(config);
  const fromAddress = config.from || config.user;
  const copy = getCopy(purpose);

  await mailer.sendMail({
    from: fromAddress,
    to,
    subject: copy.subject,
    text: `${copy.body} Code: ${code}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="color: #0f172a;">${copy.title}</h2>
        <p>${copy.body}</p>
        <p style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #ea580c;">${code}</p>
        <p>If you did not request this code, you can safely ignore this email.</p>
      </div>
    `,
  });
}
