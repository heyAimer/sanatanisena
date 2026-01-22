const CTAsection = () => {
    return (
        <section className="relative overflow-hidden py-20 ">
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
                <a
                    href="/join"
                    className="btn-primary btn-lg"
                >
                    Join the Movement
                </a>

                <a
                    href="https://discord.gg/your-discord-link"
                    target="_blank"
                    className="color-discord btn-lg"
                >
                    Join Discord
                </a>

                <a
                    href="/support-dharma"
                    className="btn-secondary btn-lg"
                >
                    Support Dharma <span className="ml-1">(सेवा)</span>
                </a>
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