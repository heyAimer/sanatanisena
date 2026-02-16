import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useSendOTP = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const sentOtp = async (email) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(`${BASE_URL}/login/forgotpassword`, {
        email
      },
      {
        withCredentials: true,
      });
      if (response.data.status === "Success") {
        toast.success(response.data.message);
        router.push("/signin/forgotpassword/otp");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Failed to send otp. Please try again.";
        setError(message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }finally {
      setIsLoading(false);
    }
  }
  return {
    sentOtp,
    isLoading,
    error,
  }
}
export default useSendOTP;
