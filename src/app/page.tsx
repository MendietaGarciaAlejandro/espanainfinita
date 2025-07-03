'use client';

import HeroSection from './components/HeroSection';
import ValoresSection from './components/ValoresSection';
import LiderSection from './components/LiderSection';
import TestimoniosSection from './components/TestimoniosSection';
import FAQSection from './components/FAQSection';
import TimelineSection from './components/TimelineSection';
import ContactoSection from './components/ContactoSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValoresSection />
      <LiderSection />
      <TestimoniosSection />
      <FAQSection />
      <TimelineSection />
      <ContactoSection />
      <Footer />
    </>
  );
}
