'use client';

import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
    </Box>
  );
}
