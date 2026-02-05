import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/utils/AuthContext";

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
             <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1">
                    {children}
                </main>
                <Footer />
            </div>
        </AuthProvider>
   );
}
