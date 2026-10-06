"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const links = [
  { label: "Home", href: "#home" },
  { label: "Why tnpLab", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F2E59]/95 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-3.5">
        <Link href="#home" className="flex items-center gap-3" aria-label="tnpLab home">
          <Image
            src="/tnplablogo.6e39ec8f.svg"
            alt="tnpLab"
            width={1572}
            height={621}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-5 lg:gap-7">
            {links.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href} className="text-sm font-medium text-slate-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="text-sm font-medium text-slate-200 transition-colors hover:text-white">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <ThemeSwitcher />
          <Link href="/compiler" className="btn-primary hidden sm:inline-flex">
            Code Lab
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#0F2E59] md:hidden">
          <div className="section-shell space-y-3 py-4">
            <nav aria-label="Mobile navigation">
              <ul className="-mx-2 divide-y divide-white/10">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-2 py-3 text-sm font-medium text-slate-100 transition-colors hover:text-[#38BDF8]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
              <ThemeSwitcher />
              <Link href="/compiler" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
                Code Lab
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
