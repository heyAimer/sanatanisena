"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useSendOTP from "@/utils/hooks/useSendOTP";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export default function OtpVerifyForgotPass() {
    const { sentOtp, isLoading: resendLoading, error:resendError } = useSendOTP()
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const router = useRouter();

    const OTP_LENGTH = 6; // customize number of digits

     const [form , setForm] = useState({
         otp: "",
         password: "",
         confirmPassword: "",
     });
    
    function handleChange(e){
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }
    const checkOTPauth = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/otp/checkauth`,
                { withCredentials: true }
            );
            if (response.data.isUser === false) {
                router.push("/signin/forgotpassword/otp");
            } else {
                router.push("/");
            }
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const message = err.response?.data?.message || "Something went wrong. Try again";
                toast.error(message);
                router.push("/")
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.otp.length !== OTP_LENGTH) {
            setError(`Please enter a ${OTP_LENGTH}-digit OTP`);
            return;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.post(`${BASE_URL}/login/forgotpassword/otp`,
                {
                    Otp:form.otp,
                    NewPassword: form.password,
                    ConfirmPassword: form.confirmPassword
                },
                {
                    withCredentials: true,
                }
            );
            toast.success(response.data.message || "OTP verified successfully!");
            router.push("/signin");
        } catch (err) {
        if (axios.isAxiosError(err)) {
            const message =
            err.response?.data?.message || "OTP verification failed";
            toast.error(message);
        } else {
            toast.error("Something went wrong");
        }
        console.error("Error during OTP verification:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkOTPauth();
    }, []);

    if (error) return;
    return (
        
        <div className="w-full max-w-sm mx-auto mt-20">
            <div className="absolute inset-0 pointer-events-none md:flex hidden">

                {/* Top Left */}
                <div className="absolute top-24 left-10 w-80 h-80 rounded-full bg-[#ffb366] animate-float-slow" />

                <div className="absolute top-48 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast" />

                {/* Bottom Right */}
                <div className="absolute bottom-50 right-12 w-[420px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

                <div className="absolute bottom-52 right-72 w-40 h-40 rounded-full bg-[#ffb366] animate-float-fast" />

            </div>
            <Card className="bg-white relative">
                <CardContent>
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        Enter OTP
                    </h2>
                    <p className="text-sm text-slate-600 text-center mb-6">
                        We have sent a {OTP_LENGTH}-digit OTP to your email.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            id='otp'
                            name='otp'
                            type="text"
                            value={form.otp}
                            onChange={handleChange}
                            placeholder={`Enter ${OTP_LENGTH}-digit OTP`}
                            className="text-center tracking-widest text-lg"
                            disabled={isLoading}
                        />

                        <div className="">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                disabled={isLoading}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-10 mt-2 text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                        <div>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPass ? "text" : "password"}
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm new password"
                                required
                            />
                            
                            <button
                                type="button"
                                onClick={() => setShowConfirmPass(!showConfirmPass)}
                                className="absolute right-10 mt-2 text-muted-foreground hover:text-foreground cursor-pointer"
                            >
                                {showConfirmPass ? (
                                    <EyeOff className="h-5 w-5 text-gray-600" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-600" />
                                )}
                            </button>
                        </div>
                        {error || resendError && (
                            <p className="text-sm text-red-600 mt-2">
                                {error || resendError}
                            </p>
                        )}
                        <Button
                        type="submit"
                        disabled={isLoading}
                        className="btn-primary btn2 cursor-pointer w-full"
                        >
                        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                        Reset Password
                        </Button>
                    </form>

                    <div className="mt-4 text-center text-sm text-slate-500">
                        Didn't receive OTP?{" "}
                        <button
                            className="text-blue-600 hover:underline"
                            onClick={() => sentOtp()}
                            >
                            {resendLoading? "Resending..":"Resend"}
                        </button>
                    </div>
                    <div className="mt-2 text-center text-sm">
                        Back to{" "}
                        <Link href="/signup" className="text-primary font-medium text-blue-600 hover:underline">
                        Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
