"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { id: "about", label: (product: string) => `About ${product}` },
  { id: "process", label: () => "Process" },
  { id: "care", label: () => "Care" },
  { id: "faq", label: () => "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const product = pathname === "/kokedama" ? "Kokedama" : "Terrariums";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/terrariums" className="site-wordmark" aria-label="Sylva Auris Care Guide home">Sylva Auris</Link>
        <nav className="site-nav" aria-label="Care guide sections">
          {navigation.map((item) => <a key={item.id} href={`#${item.id}`}>{item.label(product)}</a>)}
        </nav>
      </div>
    </header>
  );
}
