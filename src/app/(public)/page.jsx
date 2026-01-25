import BlogSection from "@/features/landing/BlogSection";
import CTAsection from "@/features/landing/CTAsection";
import HeroSection from "@/features/landing/HeroSection";
import JoinDCsection from "@/features/landing/JoinDCsection";
import WhatWeDo from "@/features/landing/WhatWeDo";

export default function DashboardPage() {
    return (
        <div className="min-h-screen w-full relative">
            <HeroSection />
            <WhatWeDo />
            <JoinDCsection />
            <BlogSection />
            <CTAsection />
        </div>
    )
}