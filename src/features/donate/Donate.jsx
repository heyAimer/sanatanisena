export default function Donate() {
  return (
    <main className="pb-12 pt-8 sm:py-20">
      <div className="max-w-7xl mx-auto px-8 space-y-20">

        {/* Header */}
        <section className="text-center space-y-6">

          <h1 className="text-3xl sm:text-4xl  font-semibold">
            Seva is not charity it is participation in Dharma
          </h1>

          <p className="text-gray-600 text-lg mx-auto sm:text-center text-justify ">
            Sanatani Sena is a community-driven initiative spreading Sanatan
            wisdom through content, conversations, and digital outreach.
            Your voluntary contribution helps this work continue.
          </p>
        </section>

        {/* Why Support */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
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
        </section>

        {/* Transparency */}
        <section className="bg-white border border-gray-200 rounded-2xl sm:p-12 p-8 space-y-6">
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
        </section>

        {/* Closing */}
        <section className="text-center space-y-6">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you contribute or not, you are always welcome here.
            Reading, learning, sharing, and joining the community is also Seva.
          </p>

          <p className="text-orange-600 font-semibold text-lg">
            Jai Shree Ram 🚩
          </p>
        </section>

      </div>
    </main>
  );
}
