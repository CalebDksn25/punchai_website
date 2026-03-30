import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-carbon/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/punchai_logo.png"
                alt="Punch AI"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-heading text-xl tracking-widest">
                PUNCH AI
              </span>
            </div>
            <p className="mt-4 text-steel text-sm max-w-xs leading-relaxed">
              Your AI-powered boxing coach. Train smarter, hit harder, fight
              better.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] mb-5 text-white/60">
              LINKS
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-steel text-sm hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-[1px] bg-strike-red transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm tracking-[0.2em] mb-5 text-white/60">
              FOLLOW US
            </h4>
            <div className="flex gap-3">
              {[
                { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/punchai_app" },
                { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@punchai.app" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-steel hover:text-white hover:border-strike-red/30 hover:bg-strike-red/5 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-steel/60 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Punch AI. All rights reserved.
          </p>
          <p className="text-steel/40 text-xs">
            Built for fighters, by fighters.
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.65a8.35 8.35 0 0 0 4.76 1.48v-3.44h-1z" />
    </svg>
  );
}
