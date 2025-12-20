import { NewsSection } from "@/components/sections/home";
import { GallerySection } from "@/components/sections/home/gallery-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { PastSpeakersSection } from "@/components/sections/home/past-speakers-section";
import { WhatToExpectSection } from "@/components/sections/home/what-to-expect-section";

export function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      {/* <AboutSection /> */}
      <PastSpeakersSection />
      <PartnersSection />
      <WhatToExpectSection />
      <GallerySection />
      <NewsSection />
    </div>
  );
}
