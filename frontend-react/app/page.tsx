import React from 'react';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import MobileApp from '@/components/landing/MobileApp';
import Technologies from '@/components/landing/Technologies';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <MobileApp />
      <Technologies />
      <Cta />
      <Footer />
    </main>
  );
}
