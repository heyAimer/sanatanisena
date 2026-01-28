import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AuthProvider } from "@/utils/AuthContext";

export default function RootLayout({ children }) {
    return (
        <AuthProvider>
            <Navbar />
            <main className="">
                {children}
            </main>
            <Footer />
        </AuthProvider>
   );
}
