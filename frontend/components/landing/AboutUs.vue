<template>
  <div class="container mx-auto px-4 py-16">
    <section class="text-center">
      <h2 class="text-3xl font-bold text-gray-900">About CropMatrix</h2>
      <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
        CropMatrix offers precise, objective and accurate plant-level health and performance assessments, continuously and at any scale.
      </p>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 text-center">Our Mission</h3>
      <p class="mt-4 text-lg text-gray-600 max-w-4xl mx-auto text-center">
        To provide continuous, automated analysis for observing, measuring, and managing crops to meet quality specifications with maximum control.
      </p>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Our Expertise</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" 
             class="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-100">
          <h4 class="font-semibold text-lg text-gray-900">{{ feature.title }}</h4>
          <p class="text-gray-600 mt-2 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    title: "Visual Plant Assessment",
    description: "Comprehensive visual plant-level health and performance assessments that are fundamental to specialty crop farming."
  },
  {
    title: "Continuous Monitoring",
    description: "Automated analysis providing objective, precise and comprehensive visual health assessments of every plant continuously."
  },
  {
    title: "Data-Driven Decisions",
    description: "Enabling growers to make informed decisions by looking at as many plants as possible to assess overall health and performance."
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge solutions that overcome traditional assessment challenges and limitations faced by specialty crop growers."
  },
  {
    title: "Quality Control",
    description: "Systematic approach to monitoring and analyzing plant health, ensuring consistent quality and optimal yields."
  },
  {
    title: "Scalable Solutions",
    description: "Adaptable technology that works across different scales of operation, from small farms to large agricultural enterprises."
  }
];
</script>
