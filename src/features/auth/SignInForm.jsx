// src/app/auth/SignInForm.jsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function SignInForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error) {
      toast.error("Google sign-in failed");
    }
  }, []);
 
  const [form , setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSignIn = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email: form.email,
        password: form.password,
      });
      console.log("SignIn response:", response);

      toast.success("Signin successful");

      setForm({
        email: "",
        password: "",
      });
      router.push("/");
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Signin failed";
        setForm({
        email: "",
        password: "",
      })
        toast.error(message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
     
    if (!form.email || !form.password) {
      return setError("Please fill in all required fields.");
    }
    setIsLoading(true);

    handleSignIn(); 
  }

  return (
    <div className="w-full max-w-md mx-auto">
      
      <Card className="relative">
        <CardContent className="relative z-20">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="">
              <div className="mb-2">
                <Label htmlFor="email">Email address</Label>
              </div>
              <Input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
            </div>

            <div className="">
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/signin/forgotpassword"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">
                {error}
              </p>
            )}
            
            <div className="flex">
              <Button type="submit" disabled={isLoading} className="btn-primary text-md w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign in
              </Button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Create an account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}