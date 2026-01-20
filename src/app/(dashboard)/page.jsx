import BlogSection from "@/components/dashboard/BlogSection";
import CTAsection from "@/components/dashboard/CTAsection";
import HeroSection from "@/components/dashboard/HeroSection";
import JoinDCsection from "@/components/dashboard/JoinDCsection";
import WhatWeDo from "@/components/dashboard/WhatWeDo";

export default function DashboardPage() {
    return (
        <div className="min-h-screen w-full relative">
            <HeroSection />
            <WhatWeDo />
            <JoinDCsection />
            <BlogSection />
            <CTAsection/>
        </div>
    )
}