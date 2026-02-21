// src/app/signin/page.jsx

import AuthHeader from "@/features/auth/AuthHeader";
import SignInForm from "@/features/auth/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Link href='/' className="text-lg font-semibold absolute top-6 z-10">
        <Image
          src="/logo.png"
          alt="sanatanisena logo"
          width={45}
          height={40}
          priority
          className="rounded-full w-auto h-auto"
        />   
      </Link>
      <div className="w-full max-w-md space-y-8">
        <AuthHeader
          title="Welcome back"
          description="Sign in to your Sanatani Sena account."
        />
        <SignInForm />
      </div>
    </main>
  );
}

export const metadata = {
  title: "Sign In - Sanatani Sena",
  description: "Sign in to Sanatani Sena.",
};