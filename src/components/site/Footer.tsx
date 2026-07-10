import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  Headphones,
  Activity,
} from "lucide-react";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/features" },
      { label: "Patient Portal", href: "/contact" },
      { label: "Security", href: "/features" },
      { label: "Integrations", href: "/features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Mission", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "News", href: "/about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/about" },
      { label: "Help Center", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <div className="inline-flex rounded-lg bg-card px-3 py-2 shadow-card-soft">
            <Logo />
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            Connecting communities, providers, and clinical opportunities through secure,
            intelligent technology.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/10 transition-colors hover:bg-navy-foreground/20"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold">{col.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> hello@trialcliniq.health
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +1 (555) 010-2040
            </li>
            <li className="flex items-center gap-2">
              <Headphones className="h-4 w-4" /> 24/7 Support
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© 2026 TrialCliniq Health. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built for better care <Activity className="h-4 w-4" />
          </p>
        </div>
      </div>
    </footer>
  );
}
