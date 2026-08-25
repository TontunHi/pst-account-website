import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import PriceEstimator from "@/components/PriceEstimator";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <Pricing />
      <PriceEstimator />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
