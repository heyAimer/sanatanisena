const links = [
  {
    id: "patreon",
    label: "Join on Patreon",
    url: "https://www.patreon.com/14534385/join",
    logo: "/patreonTrans.png",
    bg: "#000000",
    text: "#ffffff",
    border: "#ffffff",
  },
  {
    id: "kofi",
    label: "Join on Ko-fi",
    url: "https://ko-fi.com/sanatanisena/tiers",
    logo: "/kofilogofinal.png",
    bg: "#f4efe7",
    text: "#000000",
    border: "#000000",
  },
  {
    id: "buymeacoffee",
    label: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/sanatanisena",
    logo: "/buymecofee.png",
    bg: "#facc15",
    text: "#000000",
    border: "#facc15",
  }
];

export default function Donate() {
  return (
    <section className="pb-12 pt-8 sm:pb-20">
      <div className="max-w-7xl mx-auto px-8 space-y-20">

        {/* Header */}
        <div className="text-center space-y-6">

          <h1 className="text-3xl sm:text-4xl  font-semibold">
            Seva is not charity it is participation in Dharma
          </h1>

          <p className="text-gray-600 text-lg mx-auto sm:text-center text-justify ">
            Sanatani Sena is a community-driven initiative spreading Sanatan
            wisdom through content, conversations, and digital outreach.
            Your voluntary contribution helps this work continue.
          </p>
        </div>

        {/* Why Support */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              Why your support matters
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>• Maintain and improve the website & blogs</li>
              <li>• Produce Sanatan Reveals YouTube content</li>
              <li>• Manage the Discord community</li>
              <li>• Create educational Dharma resources</li>
              <li>• Keep everything free and accessible</li>
            </ul>

            <p className="italic text-gray-500 pt-4 border-l-2 border-orange-500 pl-4">
              “दानं धर्मस्य मूलम्” — Giving is the root of Dharma.
            </p>
          </div>

          {/* QR Block */}
          <div className="bg-white border border-gray-200 rounded-2xl sm:p-10 p-8 shadow-sm text-center space-y-6">
            <p className="text-gray-500">Scan to offer your Seva</p>

            {/* Replace with your QR image */}
            <div className="max-w-56 h-56 mx-auto bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              QR Code
            </div>

            <p className="text-sm text-gray-500">
              Contribute any amount you feel comfortable with.  
              There is no minimum and no obligation.
            </p>
          </div>
        </div>

        {/* all links */}
        <div className="mx-auto max-w-7xl text-center bg-gray-900 text-white py-20 px-6 text-center rounded-lg">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold">
            Support the Work That Keeps This Platform Alive
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg">
            Your support helps us spread <span className="font-medium text-orange-600">Sanātan wisdom</span>,
            maintain this platform and continue creating meaningful <span className="font-medium text-orange-600">spiritual</span> and cultural content.
            Even a small <span className="font-medium text-orange-600">contribution</span> makes a powerful difference.
            <span className="ml-1 italic text-neutral-700 dark:text-neutral-300">
                (धर्मो रक्षति रक्षितः)
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map((info) => (
              <a
                key={info.id}
                  href={info.url}
                className={`relative border rounded-sm btn-lg font-semibold group flex items-center justify-center hover:bg-[#fff7e6] bg-[var(--btn-bg)] border-[var(--btn-border)] hover:border-black`}
                style={{
                  "--btn-bg": info.bg,
                  color: info.text,
                  "--btn-border": info.border,
                }}
              >
                  <span className="transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
                    {info.label}
                  </span>

                  <div className="absolute opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 p-2">
                    {info.id !== 'kofi' && <img
                      src={info.logo}
                      alt={info.label}
                      className=" h-12 w-auto "
                    />}
                    {info.id === 'kofi' && <img
                      src={info.logo}
                      alt={info.label}
                      className=" h-18 w-auto "
                    />}
                  </div>
              </a>
            ))}
          </div>

          {/* Closing line */}
          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
          Seva is voluntary, faith is eternal — <span className="italic">सनातन धर्म</span>.
          </p>
        </div>

        {/* Transparency */}
        <div className="bg-neutral-50 border border-gray-200 rounded-2xl sm:p-12 p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-center">
            Transparency & Trust
          </h2>

          <p className="text-gray-700 text-center max-w-2xl mx-auto sm:text-center text-justify">
            Sanatani Sena is not a business. All contributions are used solely
            for infrastructure, content creation, community growth, and
            Dharma-based educational efforts. No funds are taken for
            personal profit.
          </p>

          <p className="text-center italic text-gray-500">
            “न कर्मणा न प्रजया धनेन, त्यागेनैके अमृतत्वमानशुः”
          </p>
        </div>

        {/* Closing */}
        <div className="text-center space-y-6">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you contribute or not, you are always welcome here.
            Reading, learning, sharing, and joining the community is also Seva.
          </p>

          <p className="text-orange-600 font-semibold text-lg">
            Jai Shree Ram 🚩
          </p>
        </div>

      </div>
    </section>
  );
}
