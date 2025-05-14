"use client";

import { AnimatePresence } from "framer-motion";
import Header from "@/components/landingPageComponents/header";
import FeaturesSection from "@/components/landingPageComponents/features-section";
import HowItWorks from "@/components/landingPageComponents/how-it-works";
import HeroSection from "@/components/landingPageComponents/hero-section";
import Footer from "@/components/landingPageComponents/footer";
import Testimonials from "@/components/landingPageComponents/testimonials";

export default function LandingPage() {
  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
