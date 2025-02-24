<template>
  <div>
    <!-- Hero Section -->
    <div class="relative h-64 overflow-hidden">
      <img 
        src="/health-heart.jpg" 
        alt="Healthcare Professional with Patient" 
        class="w-full h-full object-cover"
      />
      <div class="absolute bottom-4 right-8 text-3xl font-serif text-gray-800 bg-white/80 px-4 py-2 rounded">
        Making a Difference
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Volunteer Opportunities -->
        <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 class="text-2xl font-semibold text-blue-800 mb-4">Clinical Research Opportunities</h2>
          <p class="text-gray-600 mb-4">
            We are currently seeking volunteers for various clinical research studies. Your participation helps advance medical research and improve healthcare outcomes.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Participate in groundbreaking research</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Compensation for your time</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Access to innovative treatments</span>
            </li>
          </ul>
        </div>

        <!-- Requirements -->
        <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 class="text-2xl font-semibold text-blue-800 mb-4">Volunteer Requirements</h2>
          <p class="text-gray-600 mb-4">
            Qualified volunteers must meet certain criteria to participate in our studies:
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>18 years or older</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Generally good health</span>
            </li>
            <li class="flex items-start">
              <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Able to follow study protocols</span>
            </li>
          </ul>
        </div>

        <!-- Apply Now -->
        <div class="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 class="text-2xl font-semibold text-blue-800 mb-4">Apply Today</h2>
          <p class="text-gray-600 mb-6">
            Interested in participating? Take the first step towards advancing medical research by applying for one of our current studies.
          </p>
          <NuxtLink 
            to="/apply"
            class="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Apply for a Study
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
  title: "Volunteers - Merix",
  meta: [
    { hid: 'description', name: 'description', content: 'Volunteer opportunities at Merix.' },
    { hid: 'og:title', property: 'og:title', content: 'Volunteers - Merix' },
    { hid: 'og:description', property: 'og:description', content: 'Volunteer opportunities at Merix.' }
  ]
});
</script>
