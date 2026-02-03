const whyPoints = [
  {
    title: "Sanatan Dharma",
    desc: "Learn the timeless principles of Dharma that guide righteous living.",
  },
  {
    title: "Vedas & Itihas",
    desc: "Explore Vedas, Puranas, Ramayan and Mahabharat in a clear way.",
  },
  {
    title: "Open Questions",
    desc: "Ask spiritual and philosophical questions freely without judgement.",
  },
  {
    title: "Community",
    desc: "Connect with seekers who walk the same path of Dharma.",
  },
];

const WhySection = () => {
    return (
        <section className="my-10 sm:py-20">
            <div className="max-w-7xl mx-auto sm:px-10 px-6 space-y-8">
                <h2 className="text-3xl font-semibold sm:text-start text-center">
                    Why Sanatani Sena Exists
                </h2>
                <div className="flex md:flex-row flex-col md:gap-6 items-center justify-between">
                    <div className="xl:space-y-6 space-y-2 sm:text-start text-center">
                        <p className="text-lg text-gray-700 md:max-w-xl text-justify ">
                            In today’s fast-paced digital world, ancient wisdom is often
                            forgotten, misunderstood, or misrepresented. Sanatani Sena was formed to create a safe, authentic, and respectful space where people can learn, explore, and connect with Sanatan Dharma.
                        </p>
                        <p className="font-semibold ">Har Har mahadev</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:mt-0 mt-4 w-full max-w-2xl">
                        {whyPoints.map((item, index) => (
                            <div
                            key={index}
                            className="rounded-md border border-dullwhite bg-[#fffdf8] py-3 px-4 transition
                            hover:shadow-inner hover:shadow-orange-300/40
                            hover:scale-99"
                            >
                                <h3 className="text-lg font-semibold text-orange-700">
                                    {item.title}
                                </h3>
                                <p className=" text-gray-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
export default WhySection;