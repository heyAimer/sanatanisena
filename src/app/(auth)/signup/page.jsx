// src/app/signin/page.jsx

import AuthHeader from "@/features/auth/AuthHeader";
import SignUpForm from "@/features/auth/SignUpForm";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Link href='/' className="text-lg font-semibold absolute top-6 z-10">
        <Image
          src="/logo.png"
          alt="sanatanisena logo"
          width={45}
          height={40}
          priority
          className="rounded-full"
        />   
      </Link>
      <div className="w-full max-w-md space-y-8">
        <AuthHeader
          title="Create your account"
          description="Run contract risk checks and keep your reports in one place."
        />
        <SignUpForm />
      </div>
    </main>
  );
}

export const metadata = {
  title: "Sign Up - Sanatani sena",
  description: "Create your Sanatani sena account",
};