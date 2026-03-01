import {
  ScrollText,
  MessagesSquare,
  BookMarked,
  Presentation,
  Puzzle,
  UsersRound,
} from "lucide-react";

import Image from "next/image";

export const discordFeatures = [
    {
        id:1,
        title: "Bhagavad Gita Learning",
        icon: ScrollText,
    },
    {
        id:2,
        title: "Dharma Discussions",
        icon: MessagesSquare,
    },
    {
        id:3,
        title: "Granthālaya",
        icon: BookMarked,
    },
    {
        id:4,
        title: "Live Sessions",
        icon: Presentation,
    },
    {
        id:5,
        title: "Quizzes",
        icon: Puzzle,
    },
    {
        id:6,
        title: "Community Spaces",
        icon: UsersRound,
    },
];

export default function JoinDCsection() {
    return (
        <section className="relative bg-saffron-gradient2 py-10 px-4 lg:space-y-16 lg:px-16 lg:mx-16 mx-4 rounded-xl my-10">
            <div className="mx-auto max-w-7xl">
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center lg:mb-10">
                        Join Sanatani Sena on Discord
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:mb-10 mb-0">
                        <div className="mx-auto">
                            {/* Heading */}
                            <div className="text-center max-w-3xl mx-auto">
                                <p className="lg:mt-4 mt-8 text-xl font-semibold text-[#005F02]">
                                    सत्संग • संवाद • सनातन ज्ञान
                                </p>

                                <p className="mt-6 text-gray-800 leading-relaxed max-w-lg">
                                    Become part of a growing Sanatani community where seekers, learners, and practitioners come together to explore the timeless wisdom of
                                    <span className="font-semibold text-[#1F1F1F]">
                                    {" "}
                                        Sanatan Dharma 
                                    {" "}
                                    </span>
                                    through meaningful discussions, shared learning, and collective growth.
                                </p>

                                <p className="mt-4 font-semibold text-[#AA2B1D]">
                                    संगच्छध्वं संवदध्वं
                                </p>
                            </div>
                            
                        </div>
                        <div className="lg:flex justify-center items-center hidden">
                           
                            <Image
                                src="/discordImg.png"
                                alt="discord"
                                width={350}
                                height={350}
                            />
                        </div>
                    </div>
                
                    <div className="mb-16 lg:mt-0 mt-10">
                        <h3 className=" mb-6 text-xl font-semibold text-gray-900 lg:text-start text-center">
                            Why Join Our Discord? <span className="text-[#AA2B1D]">धर्म संवाद</span>
                        </h3>

                
                        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-0 sm:px-10 px-4">
                            {discordFeatures.map((items) => {
                                const Icon = items.icon;
                                return (
                                    <li key={items.id} className="flex items-center gap-4 rounded-md bg-white px-4 py-4 backdrop-blur hover:shadow-lg hover:scale-98 transition">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-saffron-gradientBR">
                                            <Icon className="h-5 w-5 text-[#cc6f1d]" />
                                        </div>
                                        <p className="font-semibold">
                                            {items.title}
                                        </p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                
                <div className="flex justify-center items-center lg:hidden absolute z-10 -top-10 w-full left-0">
                    <img
                        src="/discordImg.png"
                        alt="discord"
                        className=" rounded-full h-19 w-20 bg-white border-2 border-white"
                    />
                </div>
                <div className="absolute -bottom-10 lg:left-30 left-14 z-10">
                    <div className="h-24 w-24 rounded-xl border-4 border-white flex items-center justify-center overflow-hidden">
                        <img
                        src="/animatedLogo.gif"
                        alt="Sanatani Sena gif"
                        className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
  );
}
