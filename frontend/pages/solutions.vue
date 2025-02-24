<template>
  <div class="container mx-auto px-6 py-32">
    <h1 class="text-4xl font-bold mb-8">Our Solutions</h1>
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Solution 1 -->
      <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-4">Solution 1</h2>
        <p class="text-gray-600 mb-6">
          Innovative technology solutions designed to optimize your operations and enhance efficiency.
          Our comprehensive platform delivers measurable results.
        </p>
        <nuxt-link 
          to="/solutions/digital"
          class="inline-flex items-center text-black font-medium hover:underline">
          Learn More
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </div>

      <!-- Solution 2 -->
      <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-4">Solution 2</h2>
        <p class="text-gray-600 mb-6">
          Advanced systems and tools that help you achieve better outcomes and improve performance.
          Experience the next level of operational excellence.
        </p>
        <nuxt-link 
          to="/solutions/patient-engagement"
          class="inline-flex items-center text-black font-medium hover:underline">
          Learn More
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </div>

      <!-- Solution 3 -->
      <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-4">Solution 3</h2>
        <p class="text-gray-600 mb-6">
          State-of-the-art monitoring and control systems that provide real-time insights
          and enable data-driven decision making.
        </p>
        <nuxt-link 
          to="/solutions/monitoring"
          class="inline-flex items-center text-black font-medium hover:underline">
          Learn More
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Our Solutions | Merix',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore our comprehensive solutions designed to optimize operations and drive success through innovative technology.'
        }
      ]
    }
  }
}
</script>
