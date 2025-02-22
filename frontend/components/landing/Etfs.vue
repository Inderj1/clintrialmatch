<script setup>
import Container from "./Container.vue";
import Sectionhead from "./Sectionhead.vue";

const etfs = [
  {
    title: "Agricultural Technology ETF",
    description: "Tracks companies focused on agricultural innovation and technology",
    symbol: "FARM",
    details: "Exposure to companies developing precision farming, automated equipment, and sustainable agricultural practices."
  },
  {
    title: "Global Agriculture ETF",
    description: "Broad exposure to the agricultural sector worldwide",
    symbol: "CROP",
    details: "Includes companies involved in farming, agricultural chemicals, equipment, and distribution."
  },
  {
    title: "Sustainable Agriculture ETF",
    description: "Focus on environmentally sustainable farming practices",
    symbol: "SOIL",
    details: "Invests in companies promoting organic farming, water conservation, and soil health."
  }
];
</script>

<template>
  <div class="py-16">
    <Container>
      <Sectionhead>
        <template #title>Our ETFs</template>
        <template #desc>
          Invest in the future of agriculture through our carefully curated ETF offerings
        </template>
      </Sectionhead>

      <div class="grid md:grid-cols-3 gap-10 mx-auto mt-12">
        <div
          v-for="etf in etfs"
          :key="etf.title"
          class="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div class="mt-4">
            <h3 class="text-2xl font-semibold text-gray-800">
              {{ etf.title }}
            </h3>
            <p class="text-gray-600 mt-2">{{ etf.description }}</p>
            <div class="mt-4 inline-block px-4 py-2 bg-gray-100 rounded-lg">
              <span class="font-mono text-lg font-semibold text-gray-800">{{ etf.symbol }}</span>
            </div>
            <p class="mt-4 text-sm text-gray-700">{{ etf.details }}</p>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
