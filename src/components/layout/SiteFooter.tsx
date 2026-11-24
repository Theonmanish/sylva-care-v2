import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Link href="/terrariums" className="site-wordmark">Sylva Auris</Link>
          <p className="site-footer__tagline">Forest. Reimagined.</p>
        </div>
        <nav className="site-footer__guides" aria-label="Care guides">
          <span className="eyebrow">Care guides</span>
          <Link href="/terrariums">Terrariums</Link>
          <Link href="/kokedama">Kokedama</Link>
        </nav>
        <div className="site-footer__contact">
          <span className="eyebrow">Contact</span>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer">Instagram {siteConfig.instagram.handle}</a>
        </div>
      </div>
      <div className="site-footer__bottom">© 2026 {siteConfig.name}</div>
    </footer>
  );
}
