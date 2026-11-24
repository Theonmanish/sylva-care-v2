import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-black px-[clamp(24px,7.2vw,112px)] pb-6 pt-[70px] max-md:px-6 max-md:pb-[22px] max-md:pt-[58px]">
      <div className="grid grid-cols-[1.2fr_.7fr_1fr] gap-10 pb-[60px] max-md:grid-cols-2 max-md:gap-x-5 max-md:gap-y-9 max-md:pb-11">
        <div className="max-md:col-span-2">
          <Link
            href="/terrariums"
            className="whitespace-nowrap font-serif text-2xl font-normal tracking-[0.17em] text-ivory transition-colors duration-200 hover:text-muted-gold"
          >
            Sylva Auris
          </Link>
          <p className="mt-3 font-serif text-lg italic leading-[1.3] text-muted-gold">
            Forest. Reimagined.
          </p>
        </div>

        <nav className="flex flex-col items-start gap-[13px] max-md:gap-3" aria-label="Care guides">
          <span className="mb-1 font-sans text-xs font-semibold uppercase leading-none tracking-[0.18em] text-muted-gold">
            Care guides
          </span>
          <Link className="font-sans text-xs leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors hover:text-muted-gold" href="/terrariums">Terrariums</Link>
          <Link className="font-sans text-xs leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors hover:text-muted-gold" href="/kokedama">Kokedama</Link>
        </nav>

        <div className="flex flex-col items-start gap-[13px] max-md:gap-3">
          <span className="mb-1 font-sans text-xs font-semibold uppercase leading-none tracking-[0.18em] text-muted-gold">
            Contact
          </span>
          <a className="font-sans text-xs leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors hover:text-muted-gold" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <a className="font-sans text-xs leading-[1.4] tracking-[0.02em] text-muted-grey transition-colors hover:text-muted-gold" href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">
            Instagram {siteConfig.instagram.handle}
          </a>
        </div>
      </div>

      <div className="border-t border-white/5 pt-5 font-sans text-xs leading-[1.4] tracking-[0.02em] text-[#77766f]">
        © 2026 {siteConfig.name}
      </div>
    </footer>
  );
}
