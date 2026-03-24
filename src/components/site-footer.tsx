import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, LinkedInIcon, XSocialIcon } from "@/components/icons";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/ventures", label: "Ventures" },
  { href: "/creative-development", label: "Creative Development" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/insights", label: "Insights" },
];

const tokens = ["Founders", "Creators", "Innovators", "Experts"];

const socials = [
  { href: "#", label: "X", icon: XSocialIcon },
  { href: "#", label: "LinkedIn", icon: LinkedInIcon },
  { href: "#", label: "Instagram", icon: InstagramIcon },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/logos/text-on-white.svg"
            alt="FunTech logo"
            width={180}
            height={60}
            className="h-auto w-[180px]"
          />
          <p className="mt-4 max-w-sm text-sm text-zinc-300">
            Building ventures, developing creators, and powering innovation
            through collaborative ecosystems.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
            Explore
          </h3>
          <div className="mt-4 flex flex-col gap-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-zinc-200 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-400">
            Ecosystem Tokens
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {tokens.map((token) => (
              <span
                key={token}
                className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-200"
              >
                {token}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-zinc-700 p-2 text-zinc-200 transition hover:border-zinc-400 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-zinc-500">
          © {new Date().getFullYear()} FunTech Innovations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
