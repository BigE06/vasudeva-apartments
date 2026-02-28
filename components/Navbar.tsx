"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { MagneticButton } from "@/components/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I’m interested in ${site.name}, ${site.town}. Please share details and arrange a site visit.`
  )}`;

  return (
    <header
      className={
        "fixed left-0 right-0 top-0 z-50 transition-all " +
        (scrolled
          ? "bg-white/70 backdrop-blur-xl border-b border-black/5"
          : "bg-transparent")
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-baseline gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400/70 to-sky-400/60 ring-1 ring-black/10" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">{site.name}</div>
            <div className="text-xs text-gray-500">{site.town}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a className="hover:text-gray-900" href="#tour">Tour</a>
          <a className="hover:text-gray-900" href="#gallery">Gallery</a>
          <a className="hover:text-gray-900" href="#floorplans">Floor Plans</a>
          <a className="hover:text-gray-900" href="#specs">Specs</a>
          <a className="hover:text-gray-900" href="#location">Location</a>
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton href={wa} className="bg-emerald-600 hover:bg-emerald-600">
            WhatsApp
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
