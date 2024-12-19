import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Stats from './Stats';
import PropertyGrid from './PropertyGrid';
import FAQ from './FAQ';
import CTASection from './CTASection';
import Footer from './Footer';

function LandLords() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <PropertyGrid />
        <FAQ />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default LandLords;


