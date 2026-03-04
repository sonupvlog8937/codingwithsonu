import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mailSender = {
  email: process.env.MAIL_FROM_EMAIL || "noreply@zeedaddy.com",
  name: process.env.MAIL_FROM_NAME || "Sonu Prajapati",
};

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});