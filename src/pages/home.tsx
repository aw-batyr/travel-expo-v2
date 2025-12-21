import { NewsSection } from "@/components/sections/home";
import { AttendSection } from "@/components/sections/home/attend-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PartnersSection } from "@/components/sections/home/partners-section";
import { PastSpeakersSection } from "@/components/sections/home/past-speakers-section";
import { WhatToExpectSection } from "@/components/sections/home/what-to-expect-section";

export function Home() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      {/* <AboutSection /> */}
      <PartnersSection />
      <PastSpeakersSection />
      <AttendSection />
      <WhatToExpectSection />
      <NewsSection />
    </div>
  );
}
