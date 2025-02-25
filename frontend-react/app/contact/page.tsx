import React from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/landing/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Merix',
  description: 'Get in touch with Merix. We are here to help with any inquiries or support you need.',
  openGraph: {
    title: 'Contact Us - Merix',
    description: 'Get in touch with Merix. We are here to help with any inquiries or support you need.',
    url: 'https://merix.com/contact',
  },
  twitter: {
    title: 'Contact Us - Merix',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Merix',
      url: 'https://merix.com/contact',
      logo: 'assets/img/merix-logo.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        email: 'admin@merix.com',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CA'
        }
      }
    })
  }
};

export default function ContactPage() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email */}
            <div>
              <div className="flex items-center space-x-4 text-gray-700">
                <svg 
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a 
                  href="mailto:admin@merix.com" 
                  className="text-font hover:text-text transition-colors"
                >
                  admin@merix.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
}
