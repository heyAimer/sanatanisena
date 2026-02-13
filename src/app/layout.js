import { Hind } from "next/font/google";
import { Poppins} from "next/font/google";
import {Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import ToasterProvider from "@/utils/ToastProvider";

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
  description: "Sanatani Sena is a community for Sanatanis to learn, grow, and connect through timeless wisdom, shared knowledge, and spiritual development.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  
  openGraph: {
    title: "Sanatani Sena",
    description:
      "Sanatani Sena is a community for Sanatanis to learn, grow, and connect through timeless wisdom, shared knowledge, and spiritual development.",
    url: "https://www.sanatanisena.in",
    siteName: "Sanatani Sena",
    images: [
      {
        url: "https://www.sanatanisena.in/Server_Banner.jpg",
        width: 1200,
        height: 630,
        alt: "Sanatani Sena",
      },
    ],
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Sanatani Sena",
    description:
      "Sanatani Sena is a community for Sanatanis to learn, grow, and connect through timeless wisdom, shared knowledge, and spiritual development.",
    images: ["/Server_Banner.jpg"],
  },

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
        <ToasterProvider/>
      </body>
     
    </html>
  );
}
