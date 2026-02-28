"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function FloorPlans() {
  const plans = useMemo(() => site.floorplans, []);
  const [active, setActive] = useState(plans[0]?.id ?? "");
  const plan = plans.find((p) => p.id === active) ?? plans[0];

  return (
    <section id="floorplans" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div>
            <div className="text-xs font-semibold text-emerald-700">FLOOR PLANS</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Choose your layout
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Clear, practical layouts for 2BHK and 3BHK. Tap a plan to zoom.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {plans.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={
                "rounded-full px-4 py-2 text-sm font-semibold ring-1 transition " +
                (p.id === active
                  ? "bg-gray-900 text-white ring-black/10"
                  : "bg-white text-gray-800 ring-black/10 hover:bg-gray-50")
              }
            >
              {p.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-black/5 shadow-soft">
            {/* Simple zoom on click via native browser */}
            <a href={plan.src} target="_blank" rel="noreferrer">
              <img src={plan.src} alt={plan.title} className="w-full" loading="lazy" />
            </a>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-soft">
            <div className="text-sm font-semibold text-gray-900">{plan.title}</div>
            <div className="mt-2 text-gray-600">
              For a detailed walkthrough and availability, contact us. We’ll help you pick the right unit.
            </div>

            <div className="mt-5 rounded-2xl bg-gray-50 p-4 ring-1 ring-black/5">
              <div className="text-xs font-semibold text-gray-500">For price enquiry & site visit</div>
              <div className="mt-2 grid gap-2">
                {site.phones.map((p) => (
                  <a
                    key={p.number}
                    className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 hover:bg-gray-50"
                    href={`tel:${p.number.replace(/\s/g, "")}`}
                  >
                    {p.number}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={site.brochure.pdf}
                download
                className="flex-1 rounded-2xl bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Download brochure
              </a>
              <a
                href="#location"
                className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10"
              >
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
