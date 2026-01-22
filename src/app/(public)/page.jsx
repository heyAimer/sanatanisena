import BlogSection from "@/features/dashboard/BlogSection";
import CTAsection from "@/features/dashboard/CTAsection";
import HeroSection from "@/features/dashboard/HeroSection";
import JoinDCsection from "@/features/dashboard/JoinDCsection";
import WhatWeDo from "@/features/dashboard/WhatWeDo";

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