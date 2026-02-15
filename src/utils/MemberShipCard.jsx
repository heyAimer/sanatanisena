
export default function MembershipCard({ plan }) {
  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-white/10 w-full">

      {/* Gradient glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} blur-2xl opacity-80`}
      />

      <a
        href="https://www.patreon.com/14534385/join"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Support as ${plan.title}`}
        className="flex items-center gap-2"
      >
        
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
      </a>
    </div>
  );
}
