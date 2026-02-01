import { Hind } from "next/font/google";
import { Poppins} from "next/font/google";
import {Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { Toaster } from "react-hot-toast";

const hind = Hind({
  subsets: ["latin"],
  variable: "--font-hind",
   weight: ["300", "400", "500", "600", "700"],
});

const poppins  = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const devanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata = {
  title: "Sanatani sena",
  description: "Satyamev jayatey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`
          antialiased
          font-sans
          ${hind.variable}
          ${poppins.variable}
          ${devanagari.variable}
        `}
      >
        {children}
        <Toaster position="top-right"/>
      </body>
     
    </html>
  );
}
