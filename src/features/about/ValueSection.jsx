import { BookOpen, Scale, HeartHandshake, Landmark } from "lucide-react";

export const coreValues = [
  {
    id: "dharma",
    title: "Dharma",
    description: "Right living & righteous action",
    icon: Scale
  },
  {
    id: "gyaan",
    title: "Gyaan",
    description: "Knowledge that liberates",
    icon: BookOpen 
  },
  {
    id: "seva",
    title: "Seva",
    description: "Selfless service",
    icon: HeartHandshake
  },
  {
    id: "sanskriti",
    title: "Sanskriti",
    description: "Respect for heritage",
    icon: Landmark
  }
];

const ValueSection = () => {
    return (
        <section className="bg-orange-50 my-10 sm:py-20">
            <div className="max-w-7xl mx-auto sm:px-10 px-6 py-10">
                <h2 className="text-3xl font-semibold mb-10 sm:text-start text-center">
                    Our Core Values
                </h2>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 text-lg place-items-center sm:place-items-start">
                    {coreValues.map((val) => {
                        const Icon = val.icon; 
                        return (
                            <div key={val.id}>
                                <div className="bg-saffron-gradientBR h-14 w-16 rounded-sm flex justify-center items-center">
                                    <Icon size={ 40 } className="text-orange-700" />
                                </div>
                                
                                <div className="pl-2 border-l-2 border-dullwhite">
                                    <p className="font-semibold mt-3 text-xl">{val.title}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default ValueSection;