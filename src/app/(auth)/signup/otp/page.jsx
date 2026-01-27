// src/app/signin/page.jsx
import OtpVerify from "@/features/auth/OtpVerify";

export default function OtpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8">
        <OtpVerify />
      </div>
    </main>
  );
}

export const metadata = {
  title: "OTP - sanatani sena",
  description: "Verify your email to complete registration",
};