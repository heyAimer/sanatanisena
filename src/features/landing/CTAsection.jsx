import Link from "next/link";

const CTAsection = () => {
    return (
        <section className="relative py-20 ">
            
            <div className="absolute inset-0 pointer-events-none">

                {/* Top Left */}
                <div className="absolute top-2 left-20 w-40 h-40 rounded-full bg-[#ffb366] animate-float-slow" />

                <div className="absolute top-48 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast" />

                {/* Bottom Right */}
                <div className="absolute bottom-20 right-12 w-[400px] h-[100px] rounded-full bg-[#f28c28] animate-float-slow" />

                <div className="absolute bottom-52 right-72 w-40 h-40 rounded-full bg-[#ffb366] animate-float-fast" />

            </div>

            <div className="mx-auto max-w-7xl px-6 text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold">
                Become Part of the Sanatan Movement
                </h2>

                {/* Subtext */}
                <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
                Walk the path of <span className="font-medium text-orange-600">Dharma</span>,
                gain true <span className="font-medium text-orange-600">Gyaan</span>,
                and contribute to preserving our eternal culture.  
                <span className="ml-1 italic text-neutral-700 dark:text-neutral-300">
                    (धर्मो रक्षति रक्षितः)
                </span>
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                    href="/join"
                    className="btn-primary btn-lg"
                >
                    Join the Movement
                </Link>

                <Link
                    href="https://discord.gg/MMHtzjmyp8"
                    target="_blank"
                    className="color-discord btn-lg"
                >
                    Join Discord
                </Link>

                <Link
                    href="/donate"
                    className="btn-secondary btn-lg"
                >
                    Support Dharma <span className="ml-1">(सेवा)</span>
                </Link>
                </div>

                {/* Closing line */}
                <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
                Seva is voluntary, faith is eternal — <span className="italic">सनातन धर्म</span>.
                </p>
            </div>
        </section>
    )
}
export default CTAsection;