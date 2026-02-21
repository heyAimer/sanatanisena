import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Discord",
    href: "https://discord.gg/MMHtzjmyp8",
    icon: "/discord.png",
    alt: "Sanatani Sena Discord",
    width: 40,
    height: 40
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Sanatanisenadiscord",
    icon: "/youtube.png",
    alt: "Sanatan Reveals YouTube",
    width: 40,
    height: 40
  },
  {
    name: "Twitter",
    href: "https://x.com/sanatanisenadc",
    icon: "/tw.png",
    alt: "Sanatani Sena Twitter",
    width: 40,
    height:40
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sanatanisenadiscord",
    icon: "/instagram.png",
    alt: "Sanatani Sena instagram",
    width: 40,
    height:40
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573534160679",
    icon: "/fb.png",
    alt: "Sanatani Sena facebook",
    width: 40,
    height:40
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/u/Sanatani_Sena",
    icon: "/reddit.png",
    alt: "Sanatani Sena reddit",
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
                alt="Sanatani Sena logo"
                width={50}
                height={50}
                priority
                className="rounded-full w-auto h-auto"
              />
              <h3 className="font-semibold text-3xl text-slate-900">
                Sanatani Sena
              </h3>
            </Link>
            
            <p className="mt-3 text-sm text-slate-600 leading-relaxed text-center md:text-start">
              Fast, affordable contract risk analysis for freelancers and small agencies.
            </p>
            <p className="mt-4 text-xs text-slate-500 text-center md:text-start">
              Built for independent professionals. <Link href="/privacy"   className="border-b border-current text-blue-500 hover:text-blue-600">Privacy</Link>-first by design.
            </p>
          </div>

          {/* Product */}
          <div className="flex flex-col items-center mt-4 ">
            <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <li className="font-semibold text-[16px]">Quick Links</li>
              <li><Link href="/" className="text-slate-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-slate-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/blogs" className="text-slate-600 hover:text-blue-600">Blogs</Link></li>
              <li><Link href="/donate" className="text-slate-600 hover:text-blue-600">Contact us</Link></li>
              <li><Link href="/donate" className="text-slate-600 hover:text-blue-600">Support Dharma</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center mt-3">
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <h3 className="font-semibold text-[16px] sm:ml-[8px]">Community</h3>
              <div className="flex gap-0">
                {socialLinks.map((item) => (
                  <div key={item.name} className="flex justify-center items-center rounded-sm">
                    <Link
                      href= {item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white"
                      aria-label={item.name}
                    >
                      <img
                        src={item.icon}
                        alt="Sanatani Sena logo"
                        className="w-10 h-10 group-hover:opacity-100 transition"
                      />
                    </Link>
                  </div>
                ))}
              </div>
              
              <a
                href="mailto:sanatanisenadiscord@gmail.com?subject=Hello%20Sanatani%20Sena&body=I%20want%20to%20join%20your%20community"
              >
                <p className="text-sm text-gray-400 sm:ml-[8px]">
                  sanatanisenadiscord@gmail.com
                </p>
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex justify-center items-center">
          
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Sanatani Sena. All rights reserved.
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