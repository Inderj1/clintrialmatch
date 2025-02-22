<template>
  <div class="py-16 bg-gradient-to-b from-white to-green-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center text-gray-900 mb-4">
        Innovative Agricultural Solutions
      </h2>
      <p class="text-xl text-gray-600 text-center mb-12">
        Leading-edge technologies and methods for sustainable crop protection
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div v-for="tech in technologies" :key="tech.name"
             class="flex flex-col items-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-all hover:-translate-y-0.5">
          <div class="w-16 h-16 mb-4 flex items-center justify-center text-green-600">
            <Icon :name="tech.icon" class="text-4xl" />
          </div>
          <h3 class="text-gray-900 font-semibold text-lg mb-2 text-center">{{ tech.name }}</h3>
          <p class="text-gray-600 text-center text-sm">{{ tech.description }}</p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">Our Commitment to Innovation</h3>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-600 text-4xl mb-4">🌱</div>
            <h4 class="text-lg font-semibold mb-2">Sustainable Methods</h4>
            <p class="text-gray-600">Environmentally friendly approaches to crop protection and pollination</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-600 text-4xl mb-4">🔬</div>
            <h4 class="text-lg font-semibold mb-2">Research & Development</h4>
            <p class="text-gray-600">Continuous innovation in biological control solutions</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="text-green-600 text-4xl mb-4">🤝</div>
            <h4 class="text-lg font-semibold mb-2">Global Collaboration</h4>
            <p class="text-gray-600">Partnerships with leading agricultural institutions worldwide</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    name: "Integrated Pest Management",
    description: "Comprehensive approach combining various control methods for optimal pest management",
    icon: "mdi:shield-bug"
  },
  {
    name: "Biological Control Agents",
    description: "Natural predators and parasitoids for sustainable pest control",
    icon: "mdi:butterfly"
  },
  {
    name: "Pollination Systems",
    description: "Advanced bumblebee colonies for efficient crop pollination",
    icon: "mdi:flower-pollen"
  },
  {
    name: "Monitoring Tools",
    description: "Smart traps and sensors for pest detection and tracking",
    icon: "mdi:chart-line-variant"
  },
  {
    name: "Climate Control",
    description: "Advanced systems for optimal growing conditions",
    icon: "mdi:thermometer"
  },
  {
    name: "Biocontrol Production",
    description: "State-of-the-art facilities for beneficial insect rearing",
    icon: "mdi:factory"
  },
  {
    name: "Quality Assurance",
    description: "Rigorous testing and quality control processes",
    icon: "mdi:check-decagram"
  },
  {
    name: "Digital Solutions",
    description: "Smart farming tools for data-driven decision making",
    icon: "mdi:tablet-dashboard"
  }
];
</script>
