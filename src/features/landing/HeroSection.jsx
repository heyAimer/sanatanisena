'use client'
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const HeroSection = () => {
    const scrollToWhatWeDo = () => {
        const section = document.getElementById("what-we-do");
        if (section) {
            section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            });
        }
    };
    return (
        <section className="lg:px-16 px-5 sm:py-0 py-6 bg-saffron-gradient">
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:justify-between justify-center items-center sm:justify-items-center sm:h-[665px]">
                <Image
                    src="/hanumanji.png"
                    alt="hanuman ji"
                    width={300}
                    height={300}
                    className="z-10 sm:hidden mb-8 w-auto h-auto"
                    priority
                />
                <div className="leading-none flex flex-col gap-8 sm:p-8 sm:text-start text-center sm:items-start items-center">
                    <h2 className="font-sanskrit tracking-wide text-saffron md:text-5xl sm:text-3xl text-2xl font-semibold">सनातनी सेना</h2>
                    <h1 className="max-w-200 md:text-6xl sm:text-4xl text-3xl font-semibold">
                        A Lotus of Wisdom Blooming Online
                    </h1>
                    <h3 className="max-w-100 sm:text-lg">
                        A sacred gathering of Sanatani hearts, united to learn, remember, and live the timeless wisdom of Sanatana Dharma.
                    </h3>

                    <Link href="https://discord.com/servers/sanatani-sena-1192481727185158144" className="cursor-pointer z-40">
                        <div className="bg-saffron-gradient2 py-2 px-4 rounded-full text-white cursor-pointer hover:scale-105 hover:shadow-sm hover:shadow-orange-300 transition duration-200 flex gap-2 items-center">
                            <p className="text-xl font-semibold pl-4">Join us</p>
                            <ChevronRight size={24}/>
                        </div>
                    </Link>
                </div>
            
                {/* <div className="absolute left-150">
                    <Image
                        src="/hanumanji.png"
                        alt="hanuman ji"
                        width={550}
                        height={550}
                        className="z-10 hidden sm:flex
                            sm:w-72
                            md:w-96
                            lg:w-150
                            h-auto"
                        priority
                    />
                </div> */}
                <Image
                    src="/hanumanji.png"
                    alt="hanuman ji"
                    width={500}
                    height={500}
                    className="z-10 hidden sm:flex
                        sm:w-72
                        md:w-96
                        lg:w-180
                        h-auto"
                    priority
                />
            </div>
        </section> 
    )
 }
export default HeroSection;