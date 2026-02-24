import Image from "next/image";
import Link from "next/link";

export default function PolicyPage() {
   return (
     <div className="text-gray-800 px-6 py-12">
        <div className="absolute inset-0 pointer-events-none -z-10">

          {/* Top Left */}
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#ffb366] animate-float-slow" />

          <div className="absolute top-48 left-64 w-36 h-36 rounded-full bg-[#f28c28] animate-float-fast md:flex hidden" />

          {/* Bottom Right */}
          <div className="absolute bottom-0 right-12 w-[420px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

          <div className="absolute -bottom-100 right-72 w-40 h-40 rounded-full bg-[#ffb366] animate-float-fast" />

       </div>
       
       <div className="max-w-4xl mx-auto space-y-10">
        <div className=" flex items-center justify-center">
          <Link href='/' className="text-xl font-semibold ">
            <Image
              src="/logo.png"
              alt="sanatanisena logo"
              width={45}
              height={40}
              priority
              className="rounded-full w-auto h-auto"
            />   
          </Link>
        </div>
         
        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Sanatani Sena Discord Server Rules
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            By joining and participating in the Sanatani Sena Discord server,
            you acknowledge and agree to follow these rules.
          </p>
        </header>

        {/* Rules */}
        <div className="space-y-6">

          <Rule
            title="1. Respect and Inclusivity (सम्मान और समावेशिता)"
            items={[
              "Be kind and respectful. No trolling, rudeness, or fights. Take serious debates to DMs.",
              "No racism, sexism, hate speech, or threats — even as jokes.",
              "Avoid politics, sexuality, gender, war, or sensitive topics in public chats.",
              "Do not rage bait or provoke drama intentionally.",
            ]}
          />

          <Rule
            title="2. No NSFW / Gore / Explicit Behaviour (कोई NSFW सामग्री नहीं)"
            items={[
              "No sexual jokes, memes, media, or conversations.",
              "No gore, disturbing, graphic, or violent content.",
              "No flirting, e-dating, or relationship seeking — even jokingly.",
              "No suggestive, cropped, blurry, or bait content.",
              "No porn, nudity, or explicit material of any kind.",
              "Absolutely no sexual content involving minors. Instant ban.",
            ]}
          />

          <Rule
            title="3. No Spam / Nuisance / Self-Promotion (कोई स्पैम या स्व-प्रचार नहीं)"
            items={[
              "No spamming messages, pings, emotes, or flooding chats/VCs.",
              "If members are bothered, stop immediately.",
              "No loud audio, flashing visuals, or disruptive media.",
              "Do not mini-mod. Report issues using tickets.",
              "Do not bypass AutoMod or blocked words.",
            ]}
          />

          <Rule
            title="4. No Advertising"
            items={[
              "No DM advertising or unsolicited invites.",
              "No server or social media promotions unless asked (DMs only).",
            ]}
          />

          <Rule
            title="5. Discord Profiles"
            items={[
              "Your name, bio, avatar, and pronouns must follow server rules.",
              "No impersonation of staff, bots, or public figures.",
            ]}
          />

          <Rule
            title="6. Religious Respect (धार्मिक सम्मान)"
            items={[
              "Respect Hinduism and all religions in discussion.",
              "Follow Indian cultural values and respect elders.",
            ]}
          />

          <Rule
            title="7. Stay on Topic (विषय पर बने रहें)"
            items={[
              "Keep discussions relevant to the channel topic.",
            ]}
          />

          <Rule
            title="8. No Unnecessary Trolling (कोई अनावश्यक ट्रोलिंग नहीं)"
            items={[
              "No flaming, baiting, or disruptive behavior.",
            ]}
          />

          <Rule
            title="9. Respect Privacy (निजता का सम्मान करें)"
            items={[
              "Do not request or share personal information.",
            ]}
          />

          <Rule
            title="10. Language and Tone (भाषा और स्वर)"
            items={[
              "Use polite and respectful language.",
              "Avoid excessive caps, emojis, or slang.",
            ]}
          />

          <Rule
            title="11. Moderation Decisions (संयम निर्णय)"
            items={[
              "Respect moderation decisions.",
              "Raise concerns privately with moderators.",
            ]}
          />

          <Rule
            title="12. No Rule Loopholes"
            items={[
              "Trying to bend or exploit rules will still result in punishment.",
              "Mod issues → Contact @Head Moderator.",
              "Admin+ issues → DM Ad. General Madmax.",
            ]}
          />

        </div>

        <div className="mt-12 border-l-4 border-orange-600 bg-orange-50 p-5 rounded-md">
          <p className="font-semibold text-orange-600 mb-1">
            🎯 MUST SEE THIS ALSO
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            These are not the complete guidelines. An extended version of the
            rules can be found <span className="font-medium text-orange-600">➩ here</span>.
          </p>
        </div>

       </div>
       <div className="absolute inset-0 pointer-events-none -z-10">

        {/* Bottom Right */}
        <div className="absolute -bottom-400 left-0 w-[220px] h-[120px] rounded-full bg-[#f28c28] animate-float-slow" />

        <div className="absolute -bottom-250 right-0 w-[420px] h-[120px] rounded-full bg-[#f28c28] animate-float-fast md:flex hidden" />

      </div>
    </div>
  );
}

/* Reusable Rule Component */
function Rule({ title, items }) {
  return (
    <section className="rounded-md border border-dullwhite py-5 px-4 transition hover:shadow-inner hover:shadow-orange-300/40 bg-white hover:scale-99">
      <h2 className="text-lg font-semibold text-orange-600 mb-3">
        {title}
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
