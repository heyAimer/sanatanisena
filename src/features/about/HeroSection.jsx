import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 text-center relative my-10">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center place-items-center">
                <div className="flex justify-center items-center animate-obj">
                    <Image
                        src="/durgaMa.png"
                        alt="durga maa"
                        width={500}
                        height={500}
                        priority
                        className="object-cover w-auto h-auto"
                    />
                </div>

                <div className="max-w-lg  leading-relaxed sm:text-lg text-sm space-y-6 font-semibold">
                    <p className="">
                    Sanatani Sena is a community-driven initiative dedicated to preserving,
                    understanding, and sharing the timeless wisdom of Sanatan Dharma in a
                    modern world. We exist to reconnect people with India’s ancient
                    spiritual heritage — not as blind belief, but as living knowledge.
                    </p>

                    <p className="">
                    Sanatan Dharma is not a religion bound by borders. It is a way of life —
                    rooted in truth, compassion, self-realization, and universal harmony.
                    </p>
                </div>
               
            </div>
        </section>
    )
}
export default HeroSection;