import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StoryScroll } from "@/components/StoryScroll";
import { Gallery } from "@/components/Gallery";
import { FloorPlans } from "@/components/FloorPlans";
import { Specs } from "@/components/Specs";
import { Location } from "@/components/Location";
import { CTAStickies } from "@/components/CTAStickies";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StoryScroll />
      <Gallery />
      <FloorPlans />
      <Specs />
      <Location />
      <Footer />
      <CTAStickies />

      {/* ambient */}
      <div className="pointer-events-none fixed inset-0 noise opacity-[0.25]" />
      <div className="pointer-events-none fixed inset-0 bg-lux-gradient" />
    </main>
  );
}
