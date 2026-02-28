"use client";

import { site } from "@/lib/site";
import { Phone, MessageCircle } from "lucide-react";

export function CTAStickies() {
  const call = `tel:${site.phones[0].number.replace(/\s/g, "")}`;
  const wa = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I’m interested in ${site.name}, ${site.town}. Please share details and arrange a site visit.`
  )}`;

  return (
    <div className="fixed bottom-3 left-3 right-3 z-[70] md:hidden">
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-white/80 p-2 shadow-soft ring-1 ring-black/10 backdrop-blur-xl">
        <a
          href={call}
          className="flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
        >
          <Phone size={18} /> Call
        </a>
        <a
          href={wa}
          className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
