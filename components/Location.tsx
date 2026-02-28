"use client";

import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const q = encodeURIComponent(`${site.name} ${site.town}`);
  const embed = `https://www.google.com/maps?q=${q}&output=embed`;

  return (
    <section id="location" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs font-semibold text-emerald-700">LOCATION</div>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                Easy to reach. Easy to love.
              </h2>
              <p className="mt-3 max-w-2xl text-gray-600">
                On NH, near key landmarks. Tap “Open Directions” to navigate instantly.
              </p>
            </div>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white"
            >
              <Navigation size={18} /> Open Directions
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5 shadow-soft">
            <iframe
              title="Map"
              src={embed}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-3xl bg-gray-50 p-6 ring-1 ring-black/5 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <MapPin size={18} /> {site.locationLine}
            </div>

            <div className="mt-5 rounded-2xl bg-white p-4 ring-1 ring-black/10">
              <div className="text-xs font-semibold text-gray-500">For price enquiry & site visit</div>
              <div className="mt-3 grid gap-2">
                {site.phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                    className="rounded-xl bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-white"
                  >
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-2">
              <a
                href={site.brochure.pdf}
                download
                className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-gray-50"
              >
                Download brochure (PDF)
              </a>
              <a
                href={site.brochure.jpg}
                download
                className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-gray-50"
              >
                Download brochure (JPG)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
