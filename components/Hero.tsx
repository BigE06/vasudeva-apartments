"use client";

import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const videoSrc = isMobile ? site.heroVideo.mobile : site.heroVideo.desktop;

  const wa = useMemo(
    () =>
      `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
        `Hi, I’m interested in ${site.name}, ${site.town}. Please share details and arrange a site visit.`
      )}`,
    []
  );

  const call = `tel:${site.phones[0].number.replace(/\s/g, "")}`;

  return (
    <section id="top" className="relative min-h-[95vh] overflow-hidden pt-16">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-white" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              READY TO OCCUPY
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Ankola’s premium address
              <span className="block text-white/90">for modern luxury living.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-4 max-w-xl text-pretty text-base text-white/85 md:text-lg">
              {site.subline}. Spacious, bright interiors with covered parking — ready to move in.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <MagneticButton href={wa} className="bg-emerald-600">
                Book a site visit <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href={call} className="bg-white/15 text-white ring-1 ring-white/25 backdrop-blur">
                Call now <Phone size={18} />
              </MagneticButton>
              <a
                href="#tour"
                className="rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
              >
                Explore tour
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2 rounded-2xl bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur">
              <Metric label="2 & 3 BHK" value="Premium" />
              <Metric label="Lifts" value="3" />
              <Metric label="Parking" value="Covered" />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-3 ring-1 ring-white/15">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

