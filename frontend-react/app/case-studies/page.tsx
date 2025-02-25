import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies - Merix',
  description: 'Discover how leading healthcare practices are transforming patient care with Merix.',
  openGraph: {
    title: 'Case Studies - Merix',
    description: 'Discover how leading healthcare practices are transforming patient care with Merix.',
    url: 'https://merix.com/case-studies',
  },
  twitter: {
    title: 'Case Studies - Merix',
    description: 'Discover how leading healthcare practices are transforming patient care with Merix.',
  }
};

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Case Studies</h1>
      <p className="text-lg text-gray-600">
        Coming soon. Discover how leading healthcare practices are transforming patient care with Merix.
      </p>
    </div>
  );
}
