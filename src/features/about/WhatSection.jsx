import Image from "next/image";

const whatWeDo = [
    {
        title: "Sanatan Reveals (YouTube)",
        desc: "We create meaningful video content that explains Dharma, Karma, Itihas, and Vedic philosophy in a clear and accessible way.",
        icon: '/youtube.png',
        width: 50,
        height: 50
    },
    {
        title: "Discord Community",
        desc: "Our Discord is a digital satsang — a place where seekers discuss, learn, and grow together through respectful dialogue.",
        icon: '/discord.png',
        width: 50,
        height: 50
    },
    {
        title: "Blogs & Articles",
        desc: "We publish written knowledge so Sanatan wisdom remains searchable, readable, and preserved for future generations.",
        icon: '/blog.png',
        width: 55,
        height: 50
    },
];

const WhatSection = () => {
    return (
        <section className="my-10 sm:py-20 py-10">
            <div className="max-w-7xl mx-auto sm:px-10 px-6">
                <h2 className="text-3xl font-semibold mb-12 sm:text-start text-center">
                What We Do
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {whatWeDo.map((items) => {
                        return(
                            <div key={items.title} className="relative hover:-translate-y-1 
                            hover:rotate-1 hover:scale-[1] hover:shadow-md
                            transition rounded-md">
                                <Image
                                    src={items.icon}
                                    alt="Sanatani sena logo"
                                    height={items.height}
                                    width={items.width}
                                    priority
                                    className="absolute -top-8 left-2 w-auto h-auto"
                                />
                                <div className="border border-dullwhite px-4 py-6 rounded-md ">
                                    <h3 className="text-xl font-semibold mb-3 mt-3">{items.title}</h3>
                                    <p className="text-gray-700 text-justify">
                                    {items.desc}
                                    </p>
                            
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default WhatSection;