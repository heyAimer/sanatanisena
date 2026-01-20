import FloatingPng from "@/utils/floatingPng";
import { BookOpen, Users, PlayCircle, Flame } from "lucide-react";

export const cards = [
  {
    icon: BookOpen,
    title: "Authentic Sanatan Knowledge",
    description:
      "Sharing verified wisdom from Vedas, Puranas, Itihas, and Shastras — free from distortion and misinformation.",
  },
  {
    icon: Users,
    title: "United Sanatani Community",
    description:
      "Bringing Sanatanis together through our active Discord community for discussion, learning, and growth in Dharma.",
  },
  {
    icon: PlayCircle,
    title: "Digital Dharma Awareness",
    description:
      "Sanatan Reveals on YouTube presents spiritual knowledge in a modern, simple, and engaging format.",
  },
  {
    icon: Flame,
    title: "Living the Values of Dharma",
    description:
      "Encouraging the practice of Sanatan values — Satya, Seva, and Sanskar — in everyday life.",
  },
];

export default function WhatWeDo() {
    return (
        <section className="bg-white py-10 my-10 px-4 space-y-16 lg:px-16 px-5">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-center">
                Our Mission – Awakening Sanatan Consciousness
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <FloatingPng/>
                <div className="mx-auto">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto lg:mb-16 mb-0">
                        <p className="lg:mt-4 mt-8 text-lg font-medium text-orange-700">
                            धर्मो रक्षति रक्षितः
                        </p>

                        <p className="mt-6 text-gray-600 leading-relaxed lg:max-w-lg">
                            Sanatani Sena is a community-driven initiative dedicated to
                            preserving, understanding, and spreading the timeless wisdom of
                            <span className="font-semibold text-gray-800">
                            {" "}
                            Sanatan Dharma
                            </span>
                            . Through authentic scriptures, meaningful discussions, digital
                            content, and community engagement, we strive to reconnect today’s
                            generation with the eternal values of Dharma, Seva, and Satya.
                        </p>

                        <p className="mt-4 text-gray-700 font-medium">
                            सनातन धर्म की रक्षा, प्रचार और जन-जागरण के लिए समर्पित।
                        </p>
                    </div>
                </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                {cards.map((items) => {
                    const Icon = items.icon;
                    return (
                        <div key={items.title} className="border border-dullwhite rounded-2xl p-6 text-center hover:shadow-lg transition">
                            <div className="flex justify-center mb-4 text-orange-600">
                                <Icon size={36} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {items.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {items.description}
                            </p>
                        </div>
                    )
                })}
            </div>
    </section>
  );
}
