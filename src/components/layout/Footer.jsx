import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Discord",
    href: "https://discord.gg/YOUR_DISCORD_LINK",
    icon: "/discord.png",
    alt: "Sanatani Sena Discord",
    width: 40,
    height: 40
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SanatanReveals",
    icon: "/youtube.png",
    alt: "Sanatan Reveals YouTube",
    width: 40,
    height: 40
  },
  {
    name: "Twitter",
    href: "https://twitter.com/YOUR_TWITTER",
    icon: "/tw.png",
    alt: "Sanatani Sena Twitter",
    width: 40,
    height:40
  }
]
export default function Footer() {
  return (
    <footer className="w-full relative bg-neutral-100 ">
    {/* Radial Gradient Background from Bottom */}
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center py-2 gap-3">
              <Image
                src="/logo.png"
                alt="Sanatani sena logo"
                width={50}
                height={50}
                priority
                className="rounded-full w-auto h-auto"
              />
              <h3 className="font-semibold text-3xl text-slate-900">
                Sanatani sena
              </h3>
            </Link>
            
            <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center md:text-start">
              Fast, affordable contract risk analysis for freelancers and small agencies.
            </p>
            <p className="mt-4 text-xs text-slate-500 text-center md:text-start">
              Built for independent professionals. Privacy-first by design.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col items-center mt-4 ">
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <li className="font-semibold text-[16px]">Quick Links</li>
              <li><a href="#how-it-works" className="text-slate-600 hover:text-blue-600">Home</a></li>
              <li><a href="#features" className="text-slate-600 hover:text-blue-600">About</a></li>
              <li><a href="#use-cases" className="text-slate-600 hover:text-blue-600">Blogs</a></li>
              <li><a href="/pricing" className="text-slate-600 hover:text-blue-600">Contact us</a></li>
              <li><a href="/sample-report" className="text-slate-600 hover:text-blue-600">Support Dharma</a></li>
            </ul>
          </div>

          <div className="flex flex-col items-center mt-4">
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-[16px]">Community</h3>
              <div className="flex gap-4">
                {socialLinks.map((item) => (
                  <div key={item.name} className="flex justify-center items-center rounded-sm">
                    <Link
                      href="https://discord.gg/YOUR_DISCORD_LINK"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                      aria-label={item.name}
                    >
                      <Image
                        src={item.icon}
                        alt="Sanatani sena logo"
                        height={item.height}
                        width={item.width}
                        priority
                        className="w-auto h-auto"
                      />
                    </Link>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                contact@sanatanisena.org
              </p>

            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex justify-center items-center">
          
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ContractKit. All rights reserved.
          </p>
         
        </div>
        {/* <div className="mt-6 text-center text-sm text-gray-500">
          Built with care by{" "}
          <a
            href="https://risingdevs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 underline underline-offset-2"
          >
            RisingDevs
          </a>
        </div> */}
      </div>
    </footer>
  );
}