import { generatePasswordResetEmailHtml, generateResetSuccessEmailHtml, generateWelcomeEmailHtml, htmlContent } from "./htmlEmail";
import { mailSender, transporter } from "../utils/mailer";

export const sendVerificationEmail = async (email: string, verificationToken: string) => {
    try {
        await transporter.sendMail({
            from: `${mailSender.name} <${mailSender.email}>`,
            to: email,
            subject: "Verify your email",
            html: htmlContent.replace("{verificationToken}", verificationToken),
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send email verification");
    }
};

export const sendWelcomeEmail = async (email: string, name: string) => {
    const welcomeHtmlContent = generateWelcomeEmailHtml(name);
    try {
        await transporter.sendMail({
            from: `${mailSender.name} <${mailSender.email}>`,
            to: email,
            subject: "Welcome to PatelEats",
            html: welcomeHtmlContent,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send welcome email");
    }
};

export const sendPasswordResetEmail = async (email: string, resetURL: string) => {
    const passwordResetHtmlContent = generatePasswordResetEmailHtml(resetURL);
    try {
        await transporter.sendMail({
            from: `${mailSender.name} <${mailSender.email}>`,
            to: email,
            subject: "Reset your password",
            html: passwordResetHtmlContent,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to reset password");
    }
};

export const sendResetSuccessEmail = async (email: string) => {
    const resetSuccessHtmlContent = generateResetSuccessEmailHtml();
    try {
        await transporter.sendMail({
            from: `${mailSender.name} <${mailSender.email}>`,
            to: email,
            subject: "Password Reset Successfully",
            html: resetSuccessHtmlContent,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Failed to send password reset success email");
    }
};