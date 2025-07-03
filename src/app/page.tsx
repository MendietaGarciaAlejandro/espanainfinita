'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import ValoresSection from './components/ValoresSection';
import LiderSection from './components/LiderSection';
import ContactoSection from './components/ContactoSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValoresSection />
      <LiderSection />
      <ContactoSection />
      <Footer />
    </>
  );
}
