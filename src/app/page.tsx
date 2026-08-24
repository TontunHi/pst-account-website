import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import PriceEstimator from "@/components/PriceEstimator";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pst-dark text-slate-100 flex flex-col selection:bg-pst-gold selection:text-pst-dark">
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <Pricing />
      <PriceEstimator />
      <WhyUs />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
