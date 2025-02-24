<script setup>
definePageMeta({
  layout: "landing",
  meta: [
    { hid: 'description', name: 'description', content: 'Get in touch with Merix. We are here to help with any inquiries or support you need.' },
    { hid: 'og:title', property: 'og:title', content: 'Contact Us - Merix' },
    { hid: 'og:description', property: 'og:description', content: 'Get in touch with Merix. We are here to help with any inquiries or support you need.' },
    { hid: 'og:url', property: 'og:url', content: 'https://merix.com/contact' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Contact Us - Merix' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
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
      }
    }
  ]
});
</script>

<template>
  <div>
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
      
      <!-- Contact Information -->
      <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Email -->
          <div>
            <div class="flex items-center space-x-4 text-gray-700">
              <Icon class="text-font w-4 h-4" name="uil:envelope" />
              <a href="mailto:admin@merix.com" class="text-font hover:text-text transition-colors">admin@merix.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact Form -->
      <Contactform />
    </div>
  </div>
</template>
