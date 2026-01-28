'use client'

import AppLoader from "./AppLoader";

const { default: axios } = require("axios");
const { createContext, useState, useEffect, useContext } = require("react")

const AuthContext = createContext(null);

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export function AuthProvider({ children }){ 
    const [isUser, setIsUser] = useState(false);
    const [loading, setLoading] = useState(true);
    
    const checkAuth = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/checkauth`,
                { withCredentials: true }
            );
            console.log("CHECK AUTH:", response);
            setIsUser(response.data.isUser);
            setLoading(false);
        } catch (err) {
            if (axios.isAxiosError(err)) {        
                if (err.response?.status === 401) {
                    setIsUser(false);
                    setLoading(false);
                    return;
                }
                setIsUser(false);
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
        <AuthContext.Provider value={{ isUser, setIsUser, loading }}>
            {children}
        </AuthContext.Provider>    
    )
}
export const useAuth = () => useContext(AuthContext);