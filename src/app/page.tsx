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
import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";
import { Footer } from "@/sections/Footer";

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
      <ContactSection />
      <FAQSection />
      <Footer />
    </Box>
  );
}
