"use client";

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="pt-[120px] bg-gradient-to-b from-[#2867B2] to-[#1e4c8a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/health-heart.jpg')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 py-20" style={{ maxWidth: '1280px' }}>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white relative z-10 leading-tight">
            Future of Clinical Trial <span className="text-[#FFB5A0]">Enrollment</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 relative z-10 max-w-3xl" style={{ lineHeight: '1.6' }}>
            Specialized AI solution for oncology clinical trials that combines precision patient matching based on biomarkers and genomic data with proactive retention management.
          </p>
          <Link 
            href="/demo"
            className="bg-[#FFB5A0] text-white px-10 py-4 rounded-lg hover:bg-[#ff9c80] transition-all duration-300 text-lg font-medium relative z-10 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            BOOK A DEMO
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 pb-20" style={{ maxWidth: '1280px' }}>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 max-w-4xl mx-auto">
          <p className="text-xl text-white/90 mb-10 text-center font-bold">Trusted by practices across the world</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-5xl font-bold mb-3 text-[#FFB5A0]">10+</h3>
              <p className="text-white/90 uppercase text-sm font-medium tracking-wider">Practices</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-5xl font-bold mb-3 text-[#FFB5A0]">100+</h3>
              <p className="text-white/90 uppercase text-sm font-medium tracking-wider">Patients</p>
            </div>
            <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-5xl font-bold mb-3 text-[#FFB5A0]">4+</h3>
              <p className="text-white/90 uppercase text-sm font-medium tracking-wider">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
