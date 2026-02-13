import MembershipCard from "@/utils/MemberShipCard";

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

const membershipPlans = [
  {
    id: 1,
    title: "Shraddhavan (श्रद्धावान)",
    subtitle: "The Faithful Seeker",
    description:
      "A beginner on the Sanatani path who supports Dharma and gains access to exclusive spiritual content.",
    price: 3,
    currency: "USD",
    image: "/shradhawan.png",
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
    image: "upasak.png",
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
    image: "/yajman.png",
    gradient: "from-yellow-600/40 via-green-500/20 to-transparent",
  },
];

export default function Donate() {
  return (
    <section className="pb-12 pt-8 sm:pb-20">
      <div className="absolute inset-0 pointer-events-none -z-10">

        <div className="absolute top-40 left-20 w-60 h-60 rounded-full bg-[#ffb366] animate-float-slow" />

        <div className="absolute top-2 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast" />
      </div>
      
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center" >
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
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
        <div className="text-center space-y-6 relative">
          <div className="absolute inset-0 pointer-events-none -z-10">

            <div className="absolute bottom-4 right-0 w-[200px] h-[80px] rounded-full bg-[#f28c28] animate-float-slow" />

            <div className="absolute bottom-10 right-0 w-40 h-20 rounded-full bg-[#ffb366] animate-float-fast" />

          </div>
          <p className="text-gray-600 max-w-2xl mx-auto relative">
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
