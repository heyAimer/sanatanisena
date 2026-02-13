const membershipPlans = [
  {
    id: 1,
    title: "Shraddhavan (श्रद्धावान)",
    subtitle: "The Faithful Seeker",
    description:
      "A beginner on the Sanatani path who supports Dharma and gains access to exclusive spiritual content.",
    price: 3,
    currency: "USD",
    image: "/plans/shraddhavan.png",
    gradient: "from-orange-600/40 via-orange-500/20 to-transparent",
  },
  {
    id: 2,
    title: "Upasaka (उपासक)",
    subtitle: "The Dedicated Practitioner",
    description:
      "A deeper practitioner contributing actively to Sanatani Sena with special access and rewards.",
    price: 5,
    currency: "USD",
    image: "/plans/upasaka.png",
    gradient: "from-purple-600/40 via-pink-500/20 to-transparent",
  },
  {
    id: 3,
    title: "Yajman (यजमान)",
    subtitle: "The Spiritual Patron",
    description:
      "A patron who sustains the mission and gets premium blessings, recognition and privileges.",
    price: 7,
    currency: "USD",
    image: "/plans/yajman.png",
    gradient: "from-yellow-600/40 via-green-500/20 to-transparent",
  },
];
export default function MembershipCard({ plan }) {
  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/10 lg:h-[400px] md:h-[480px] sm:h-[380px] h-[400px] w-full">

      {/* Gradient glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} blur-2xl opacity-80`}
      />

      <div className="relative p-6 flex flex-col h-full">

        {/* Image */}
        <div className="h-[160px] flex items-center justify-center rounded-xl bg-black/30">
          <img
            src={plan.image}
            alt={plan.title}
            className="w-45 h-45 object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white text-center">
          {plan.title}
        </h3>

        <p className="text-yellow-400 text-sm mt-2 text-center">
          ✨ {plan.subtitle}
        </p>

        <p className="text-gray-400 mt-3 text-sm leading-relaxed text-center mx-2">
          {plan.description}
        </p>
      </div>
    </div>
  );
}
