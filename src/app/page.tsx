'use client';

import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/sections/HeroSection";
import { WelcomeSection } from "@/sections/WelcomeSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { CategoryGallery } from "@/sections/CategoryGallery";
import { SearchLocSection } from "@/sections/SearchLocSection";
import { MapsSection } from "@/sections/MapsSection";
import { ReviewsSection } from "@/sections/ReviewsSection";

export default function Home() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <WelcomeSection />
      <FeaturesSection />
      <CategoryGallery />
      <SearchLocSection />
      <MapsSection />
      <ReviewsSection />
    </Box>
  );
}
