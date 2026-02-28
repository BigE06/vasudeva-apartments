"use client";

import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Check } from "lucide-react";

export function Specs() {
  return (
    <section id="specs" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <Reveal>
          <div>
            <div className="text-xs font-semibold text-emerald-700">SPECIFICATIONS</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Premium materials, practical choices
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              A clean summary of what matters most — comfort, quality, and long-term value.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {site.specs.map((g) => (
            <Reveal key={g.title} className="rounded-3xl bg-white p-6 ring-1 ring-black/5 shadow-soft">
              <div className="text-lg font-semibold text-gray-900">{g.title}</div>
              <ul className="mt-4 grid gap-3">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-gray-700">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                      <Check size={14} />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
