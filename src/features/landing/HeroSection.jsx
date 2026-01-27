import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
                    <h2 className="font-sanskrit tracking-wide text-saffron md:text-4xl sm:text-3xl text-2xl font-semibold">सनातनी सेना</h2>
                    <h1 className="max-w-150 md:text-5xl sm:text-4xl text-3xl font-semibold">
                        Welcome to our sanatani sena server.
                    </h1>
                    <h3 className="max-w-80">
                        Your gateway to spiritual wisdom and community.
                        Start your journey with us today!
                    </h3>

                    <Button className="btn-primary btn-lg text-2xl w-fit">
                        Get Started
                    </Button>

                </div>
            
                <Image
                    src="/hanumanji.png"
                    alt="hanuman ji"
                    width={500}
                    height={500}
                    className="z-10 hidden sm:flex
                        sm:w-72
                        md:w-96
                        lg:w-120
                        h-auto"
                    priority
                />
            </div>
        </section> 
    )
 }
export default HeroSection;