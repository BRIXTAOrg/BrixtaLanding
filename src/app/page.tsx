// src/app/page.tsx
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeownerRealitySection from "@/components/home/HomeownerRealitySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CrewAndMaterialsSection from "@/components/home/CrewAndMaterialsSection";
import BusinessModelSection from "@/components/home/BusinessModelSection";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F3EE] text-[#121212]">
      <HeroSection />
      <HomeownerRealitySection />
      <HowItWorksSection />
      <CrewAndMaterialsSection />
      <BusinessModelSection />
      <Testimonials />
    </main>
  );
}