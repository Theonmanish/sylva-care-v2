"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const WORDMARK_HREF = "https://www.sylvaauris.in/";

const navigation = [
  { id: "about", label: (product: string) => `About ${product}` },
  { id: "process", label: () => "Process" },
  { id: "care", label: () => "Care" },
  { id: "faq", label: () => "FAQ" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const product = pathname === "/kokedama" ? "Kokedama" : "Terrariums";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[rgba(234,228,216,0.08)] bg-[rgba(0,0,0,0.46)] backdrop-blur-[14px]">
      <div className="flex min-h-[82px] w-full items-center justify-between gap-9 px-[clamp(24px,7.2vw,112px)] max-md:min-h-[76px] max-[380px]:px-5">
        <a
          href={WORDMARK_HREF}
          className="whitespace-nowrap font-serif text-2xl font-normal tracking-[0.17em] text-ivory transition-colors duration-200 hover:text-muted-gold max-md:text-[23px]"
          aria-label="Visit Sylva Auris main website"
        >
          Sylva Auris
        </a>

        <nav
          className="hidden items-center justify-end gap-[clamp(24px,4vw,56px)] md:flex"
          aria-label="Care guide sections"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              onClick={() => handleNavigate(item.id)}
              className="font-sans text-sm leading-[1.5] tracking-[0.12em] text-[rgba(234,228,216,0.9)] transition-colors duration-200 hover:text-muted-gold aria-[current=location]:text-muted-gold"
            >
              {item.label(product)}
            </a>
          ))}
        </nav>

        <button
          className="flex h-[42px] w-[42px] cursor-pointer flex-col items-end justify-center gap-1.5 border-0 bg-transparent p-3 text-ivory hover:text-muted-gold focus-visible:outline focus-visible:outline-1 focus-visible:outline-muted-gold md:hidden"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={`block h-px w-[22px] bg-current transition-transform duration-[220ms] ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px bg-current transition-[width,transform] duration-[220ms] ${isOpen ? "w-[22px] -translate-y-[3.5px] -rotate-45" : "w-4"}`} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`absolute inset-x-0 top-full flex flex-col gap-0 border-b border-[rgba(234,228,216,0.1)] bg-[rgba(0,0,0,0.84)] px-[clamp(24px,7.2vw,112px)] pb-[26px] pt-2 backdrop-blur-[16px] transition-[opacity,transform,visibility] duration-[220ms] ease-out md:hidden max-[380px]:px-5 ${isOpen ? "visible translate-y-0 opacity-100 pointer-events-auto" : "invisible -translate-y-2 opacity-0 pointer-events-none"}`}
        aria-label="Mobile care guide sections"
        aria-hidden={!isOpen}
      >
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? "location" : undefined}
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleNavigate(item.id)}
            className="py-4 font-serif text-[25px] font-normal leading-[1.2] tracking-[0.04em] text-[rgba(234,228,216,0.9)] transition-colors duration-200 hover:text-muted-gold aria-[current=location]:text-muted-gold"
          >
            {item.label(product)}
          </a>
        ))}
      </nav>
    </header>
  );
}
