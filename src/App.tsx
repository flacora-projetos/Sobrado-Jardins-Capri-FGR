/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Hero } from "@/components/Hero";
import { QuickHighlights } from "@/components/QuickHighlights";
import { Presentation } from "@/components/Presentation";
import { Gallery } from "@/components/Gallery";
import { CarouselGallery } from "@/components/CarouselGallery";
import { Differentials } from "@/components/Differentials";
import { Lifestyle } from "@/components/Lifestyle";
import { TechnicalSheet } from "@/components/TechnicalSheet";
import { Location } from "@/components/Location";
import { IntermediateCTA } from "@/components/IntermediateCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-sans text-brand-text bg-brand-light selection:bg-brand-gold/30 selection:text-brand-dark">
      <Hero />
      <QuickHighlights />
      <Presentation />
      <Gallery />
      <CarouselGallery />
      <Differentials />
      <Lifestyle />
      <TechnicalSheet />
      <Location />
      <IntermediateCTA />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
