"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";

const steps = [
  { title: "Arrive", subtitle: "See the building exterior" },
  { title: "Enter", subtitle: "A clean, welcoming entrance" },
  { title: "Park", subtitle: "Covered parking for cars & two-wheelers" },
  { title: "Relax", subtitle: "Living & dining — bright and spacious" },
  { title: "Cook", subtitle: "Modern modular kitchen" },
  { title: "Rest", subtitle: "Comfortable bedroom" },
  { title: "Ready", subtitle: "Move in today — book a site visit" },
];

export function StoryScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Fade the intro heading away after the first part of the scroll.
  const introOpacity = useTransform(scrollYProgress, [0, 0.08, 0.16], [1, 1, 0]);

  return (
    <section id="tour" className="relative bg-white">
      {/* Make this section last longer while scrolling */}
      <div ref={ref} className="relative h-[650vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Images (full-screen) */}
          {site.gallery.slice(0, steps.length).map((img, i) => {
            const start = i / steps.length;
            const end = (i + 1) / steps.length;
            const opacity = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0, 1, 1, 0]);
            const scale = useTransform(scrollYProgress, [start, end], [1.06, 1]);
            return (
              <motion.img
                key={img.src}
                src={img.src}
                alt={img.label}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ opacity, scale }}
              />
            );
          })}

          {/* Tasteful overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_55%)]" />

          {/* Intro heading (only at the beginning) */}
          <motion.div
            style={{ opacity: introOpacity }}
            className="pointer-events-none absolute left-0 right-0 top-0 mx-auto max-w-6xl px-4 pt-24"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              IMMERSIVE TOUR
            </div>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Scroll to experience the journey
            </h2>
            <p className="mt-3 max-w-2xl text-white/80 md:text-lg">
              A cinematic walkthrough built from real photos — exterior to interiors.
            </p>
          </motion.div>

          {/* Step captions (subtle, not messy) */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-4 pb-10">
            <div className="flex items-end justify-between gap-6">
              <div className="relative min-w-0">
                {steps.map((s, i) => {
                  const start = i / (steps.length - 1);
                  const opacity = useTransform(scrollYProgress, [start - 0.08, start, start + 0.08], [0, 1, 0]);
                  const y = useTransform(scrollYProgress, [start - 0.08, start, start + 0.08], [10, 0, -10]);
                  return (
                    <motion.div key={s.title} style={{ opacity, y }} className="absolute bottom-0 left-0">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
                        STEP {i + 1} · {s.title}
                      </div>
                      <div className="mt-3 max-w-xl text-pretty text-2xl font-semibold text-white md:text-3xl">
                        {s.subtitle}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Minimal progress indicator */}
              <div className="hidden md:flex flex-col items-end gap-2">
                <div className="text-xs font-semibold text-white/80">Progress</div>
                <div className="h-1 w-52 overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    className="h-full bg-white/80"
                    style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
