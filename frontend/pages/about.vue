<script setup>
import { ref } from 'vue';

definePageMeta({
  layout: "landing",
  title: "About Us - Orynx",
  meta: [
    { hid: 'description', name: 'description', content: 'Learn more about Orynx, our mission, and values.' },
    { hid: 'og:title', property: 'og:title', content: 'About Us - Orynx' },
    { hid: 'og:description', property: 'og:description', content: 'Learn more about Orynx, our mission, and values.' },
    { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk/about' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'About Us - Orynx' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Learn more about Orynx, our mission, and values.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Orynx',
        url: 'https://orynx.co.uk',
        logo: 'assets/img/ORY.png',
        sameAs: [
          'https://www.facebook.com/orynx',
          'https://www.twitter.com/orynx',
          'https://www.linkedin.com/company/orynx'
        ]
      }
    }
  ]
});

const features = ref([
  {
    title: "Lifelike Patient Scenarios",
    icon: "user-md",
    description: "Empowers healthcare practitioners with immersive simulations that mirror real patient interactions, fostering skill refinement and enhanced decision-making."
  },
  {
    title: "Advanced Technology Integration",
    icon: "cogs",
    description: "Utilizes cutting-edge tools like ChatGPT and Generative AI to dynamically generate scenarios based on real-world data, enhancing decision-making in diverse medical contexts."
  },
  {
    title: "RAG Integration",
    icon: "database",
    description: "Enhances simulations by using Retrieval-Augmented Generation technology, accessing extensive knowledge repositories to amplify scenario depth and relevance."
  },
  {
    title: "Cloud Infrastructure",
    icon: "cloud",
    description: "Built on AWS and modern cloud technologies, our platform ensures scalability, security, and global accessibility for seamless user engagement."
  },
  {
    title: "Big Data Analytics",
    icon: "chart-bar",
    description: "Harnesses Big Data analytics to extract actionable insights from user interactions, continuously refining simulation accuracy and effectiveness."
  }
]);
</script>

<template>
  <div class="container mx-auto px-4 text-[#323031] pt-20">
    <section class="text-center mt-16 mb-16">
      <h1 class="text-4xl font-bold">About Us</h1>
      <p class="mt-4 text-lg">
        At the forefront of integrating AI technology in healthcare, we're committed to revolutionizing patient care.
      </p>
    </section>

    <section class="my-16">
      <h2 class="text-3xl font-bold text-center">Our Mission</h2>
      <p class="mt-4 text-lg max-w-4xl mx-auto text-center">
        Our mission is to furnish healthcare professionals with experiential learning opportunities, enabling them to
        elevate patient care standards, streamline operations, and achieve superior outcomes.
      </p>
    </section>

    <section class="my-16">
      <h2 class="text-3xl font-bold text-center">Key Features</h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-8">
        <div v-for="feature in features" :key="feature.title" class="flex gap-4 items-start">
          <div class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <h3 class="font-semibold text-lg">{{ feature.title }}</h3>
            <p class="mt-2 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.icon {
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.2));
  width: 50px;
  height: 50px;
}
</style>
