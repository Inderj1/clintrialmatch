import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Merix',
  description: 'Learn more about Merix, our mission, and values.',
  openGraph: {
    title: 'About Us - Merix',
    description: 'Learn more about Merix, our mission, and values.',
    url: 'https://merix.com/about',
  },
  twitter: {
    title: 'About Us - Merix',
    description: 'Learn more about Merix, our mission, and values.',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Merix',
      url: 'https://merix.com',
      logo: 'assets/img/merix-logo.svg',
      sameAs: [
        'https://www.facebook.com/merix',
        'https://www.twitter.com/merix',
        'https://www.linkedin.com/company/merix'
      ]
    })
  }
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image 
          src="/aboutus.jpg" 
          alt="Merix Team" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our mission is to revolutionize sustainable agriculture through advanced technology and biological solutions
            </h1>
            <p className="text-xl text-white">
              Leading the way in AI-powered crop management and biological pest control
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4 text-sm">
            <a href="#sustainability" className="text-green-700 hover:text-green-900">Sustainability</a>
            <a href="#innovation" className="text-green-700 hover:text-green-900">Innovation</a>
            <a href="#growth" className="text-green-700 hover:text-green-900">Growth & Expansion</a>
          </div>
        </div>
      </div>

      {/* Main Content */}

      {/* Growth & Achievements Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Growth & Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Achievements */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Recent Milestones</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Successfully deployed AI-powered crop monitoring systems in over 100 greenhouses</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Expanded operations to 5 new countries in the past year</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Launched innovative biological pest control solutions for vertical farming</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Established new research partnerships with leading agricultural institutions</p>
                </li>
              </ul>
            </div>

            {/* Future Plans */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-700 mb-6">Strategic Growth</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Investing in advanced machine learning capabilities for precise crop management</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Expanding our biological control agent production facilities</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Developing new sustainable solutions for emerging agricultural challenges</p>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">•</span>
                  <p>Building strategic partnerships to enhance global reach and impact</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
