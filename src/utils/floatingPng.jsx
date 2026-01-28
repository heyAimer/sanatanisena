import Image from "next/image";

export default function FloatingPng() {
  return (
    <div className="relative flex justify-center items-center animate-obj">
        <Image
          src="/safronOm.png"
          alt="Diya"
          width={400}
          height={400}
        priority
        className="w-auto h-auto"
        />
    </div>
  );
}
