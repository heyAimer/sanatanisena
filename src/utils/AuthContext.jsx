'use client'

import toast from "react-hot-toast";
import AppLoader from "./AppLoader";
import { useRouter } from "next/navigation";

const { default: axios } = require("axios");
const { createContext, useState, useEffect, useContext } = require("react")

const AuthContext = createContext(null);

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function AuthProvider({ children }) {
    const router = useRouter();

    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    const logout = async () => {
        console.log("clicekd logout")
        try {
            setLoading(true);
            const response = await axios.post(`${BASE_URL}/logout`,
                {},
                {
                    withCredentials: true
                }
            );
            setIsUser(false);
            setIsAdmin(false);
            console.log("logout: ",response);
            toast.success("Logout successfully!")
            router.push("/");
        } catch (err) {
            if (axios.isAxiosError(err)) {
                const message =
                err.response?.data?.message || "OTP verification failed";
                toast.error(message);
            } else {
                toast.error("Something went wrong");
            }

            console.error("Error during Logout ", err);
        } finally {
            setLoading(false);
        }
    }
    
    const checkAuth = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/checkauth`,
                { withCredentials: true }
            );
            console.log("CHECK AUTH:", response);
            setIsUser(response.data.isUser);
            setIsAdmin(response.data.isAdmin);
            setLoading(false);
        } catch (err) {
            if (axios.isAxiosError(err)) {        
                if (err.response?.status === 401) {
                    setLoading(false);
                    return;
                }
                setIsUser(false);
                setIsAdmin(false);
            }
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        checkAuth();
    }, []);

    if (loading) {
        return <AppLoader/>
    }

    return (
        <AuthContext.Provider value={{ isUser, setIsUser, loading, logout, isAdmin }}>
            {children}
        </AuthContext.Provider>    
    )
}
export const useAuth = () => useContext(AuthContext);