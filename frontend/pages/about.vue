<script setup>

definePageMeta({
  layout: "landing",
  title: "About Us - Merix",
  meta: [
    { hid: 'description', name: 'description', content: 'Learn more about Merix, our mission, and values.' },
    { hid: 'og:title', property: 'og:title', content: 'About Us - Merix' },
    { hid: 'og:description', property: 'og:description', content: 'Learn more about Merix, our mission, and values.' },
    { hid: 'og:url', property: 'og:url', content: 'https://merix.com/about' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'About Us - Merix' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Learn more about Merix, our mission, and values.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
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
      }
    }
  ]
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative h-[60vh] overflow-hidden">
      <img 
        src="/aboutus.jpg" 
        alt="Merix Team" 
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Our mission is to revolutionize sustainable agriculture through advanced technology and biological solutions
          </h1>
          <p class="text-xl text-white">
            Leading the way in AI-powered crop management and biological pest control
          </p>
        </div>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="bg-gray-100 border-b border-gray-200">
      <div class="container mx-auto px-4">
        <div class="flex space-x-8 py-4 text-sm">
          <a href="#sustainability" class="text-green-700 hover:text-green-900">Sustainability</a>
          <a href="#innovation" class="text-green-700 hover:text-green-900">Innovation</a>
          <a href="#growth" class="text-green-700 hover:text-green-900">Growth & Expansion</a>
        </div>
      </div>
    </div>

    <!-- Main Content -->

    <!-- Growth & Achievements Section -->
    <div class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Growth & Achievements</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Recent Achievements -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-green-700 mb-6">Recent Milestones</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Successfully deployed AI-powered crop monitoring systems in over 100 greenhouses</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Expanded operations to 5 new countries in the past year</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Launched innovative biological pest control solutions for vertical farming</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Established new research partnerships with leading agricultural institutions</p>
              </li>
            </ul>
          </div>

          <!-- Future Plans -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-green-700 mb-6">Strategic Growth</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Investing in advanced machine learning capabilities for precise crop management</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Expanding our biological control agent production facilities</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Developing new sustainable solutions for emerging agricultural challenges</p>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-3">•</span>
                <p>Building strategic partnerships to enhance global reach and impact</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
