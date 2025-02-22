<template>
  <div class="bg-gray-50 py-24">
    <div class="container mx-auto px-4">
      <!-- Features Section -->
      <div class="text-center max-w-3xl mx-auto">
        <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
          Our Agricultural Solutions
        </h2>
        <p class="text-lg mt-4 text-gray-600">
          Comprehensive Solutions for Sustainable Crop Protection
        </p>
      </div>

      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16">
        <div v-for="item in features" :key="item.title" 
             class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="flex items-center mb-4">
            <div class="bg-green-600 rounded-lg p-3 w-12 h-12 flex items-center justify-center">
              <Icon class="text-white text-2xl" :name="item.icon" />
            </div>
            <h3 class="font-semibold text-xl text-gray-900 ml-4">{{ item.title }}</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: "Beneficial Insects",
    description: "Wide range of natural predators and parasitoids for effective biological pest control in various crops.",
    icon: "mdi:bug",
  },
  {
    title: "Bumblebee Pollination",
    description: "Professional pollination services using bumblebees to maximize crop yield and quality.",
    icon: "mdi:bee",
  },
  {
    title: "Monitoring Systems",
    description: "Advanced monitoring tools and traps for early pest detection and population tracking.",
    icon: "mdi:chart-line",
  },
  {
    title: "Biostimulants",
    description: "Natural products to enhance plant growth, stress resistance, and crop quality.",
    icon: "mdi:sprout",
  },
  {
    title: "Technical Expertise",
    description: "Expert consultation and support from our team of agricultural specialists.",
    icon: "mdi:account-group",
  },
  {
    title: "Research Programs",
    description: "Ongoing research and development of new sustainable agricultural solutions.",
    icon: "mdi:microscope",
  },
];
</script>
