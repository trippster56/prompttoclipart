import React from 'react';
import Navbar from '../components/Navigation/Navbar';
import Hero from '../components/Home/Hero';
import Features from '../components/Home/Features';
import HowItWorks from '../components/Home/HowItWorks';
import Pricing from '../components/Home/Pricing';
import Testimonials from '../components/Home/Testimonials';
import CtaSection from '../components/Home/CtaSection';
import Footer from '../components/Footer/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;