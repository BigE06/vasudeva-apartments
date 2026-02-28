"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { X } from "lucide-react";

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const items = useMemo(() => site.gallery, []);

  return (
    <section id="gallery" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold text-emerald-700">GALLERY</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Interiors that feel instantly premium
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                Tap an image for full-screen view. Everything here is from the real apartment.
              </p>
            </div>
            <a
              href={site.brochure.pdf}
              download
              className="hidden rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-gray-50 md:block"
            >
              Download brochure
            </a>
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((img) => (
            <button
              key={img.src}
              className="group mb-4 w-full overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-soft"
              onClick={() => setOpen(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="flex items-center justify-between px-4 py-3">
                <div className="text-sm font-semibold text-gray-900">{img.label}</div>
                <div className="text-xs text-gray-500">Tap to view</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/70 p-4 backdrop-blur" onClick={() => setOpen(null)}>
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-3xl bg-black" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white ring-1 ring-white/20 backdrop-blur"
                onClick={() => setOpen(null)}
              >
                <X size={18} />
              </button>
              <img src={open} alt="" className="max-h-[85vh] w-full object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
