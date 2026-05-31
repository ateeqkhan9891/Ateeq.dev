import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import WhatIDo from "@/components/sections/WhatIDo";
import HowIWork from "@/components/sections/HowIWork";
import TechStack from "@/components/sections/TechStack";
import WhyHireMe from "@/components/sections/WhyHireMe";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedProjects />
      <WhatIDo />
      <HowIWork />
      <TechStack />
      <WhyHireMe />
      <Testimonials />
      <CTA />
    </>
  );
}
