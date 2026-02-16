// src/app/auth/SignInForm.jsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import useSendOTP from "@/utils/hooks/useSendOTP";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const {sentOtp,isLoading,error } = useSendOTP();

  async function onSubmit(e) {
    e.preventDefault();
    console.log("hello in submit bro")
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
     sentOtp(email);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="absolute inset-0 pointer-events-none md:flex hidden">

        {/* Top Left */}
        <div className="absolute top-24 left-10 w-80 h-80 rounded-full bg-[#ffb366] animate-float-slow" />

        <div className="absolute top-48 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast" />

        {/* Bottom Right */}
        <div className="absolute bottom-50 right-12 w-[420px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

        <div className="absolute bottom-52 right-72 w-40 h-40 rounded-full bg-[#ffb366] animate-float-fast" />

      </div>
      
      <Card className="bg-white relative">
        <CardContent className="relative z-20">
          <form onSubmit={onSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="email">Email Address</Label>    
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="mt-2"
              />
            </div>
            <div>
              {error && (
                <p className="text-sm text-red-600 mt-2 mb-2 font-semibold">
                  {error}
                </p>
              )} 
              <Button
                type="submit"
                className="btn-primary btn2 cursor-pointer w-full"
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                Send Otp
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            Remembered your password?{" "}
            <Link
              href="/signin"
              className="text-primary font-medium hover:underline"
            >
              Back to signin
            </Link>
          </div>

           <p className="mt-4 text-xs text-center text-slate-500">
            🔒 For security reasons, we don’t disclose whether an email exists.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}