import CTASection from "@/features/about/CTASection";
import HeroSection from "@/features/about/HeroSection";
import ValueSection from "@/features/about/ValueSection";
import WhatSection from "@/features/about/WhatSection";
import WhySection from "@/features/about/WhySection";

const page = () => {
    return (
        <section className="w-full bg-[#fffdf8] text-gray-800">
            <HeroSection />
            <WhySection />
            <WhatSection/>
            <ValueSection />
            <CTASection/>
        </section>
    );
}
export default page;
export const metadata = {
  title: "About Sanatani Sena",
  description:
    "Learn about Sanatani Sena – a community-driven initiative preserving and sharing the timeless wisdom of Sanatan Dharma.",
};
