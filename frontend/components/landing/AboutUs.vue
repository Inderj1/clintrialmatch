<template>
  <div class="container mx-auto px-4 py-16">
    <section class="text-center">
      <h2 class="text-3xl font-bold text-font">About Us</h2>
      <p class="mt-4 text-lg text-text max-w-4xl mx-auto">
        At the forefront of integrating AI technology in healthcare, we're committed to revolutionizing patient care.
      </p>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-bold text-font text-center">Our Mission</h3>
      <p class="mt-4 text-lg text-text max-w-4xl mx-auto text-center">
        Our mission is to furnish healthcare professionals with experiential learning opportunities, enabling them to
        elevate patient care standards, streamline operations, and achieve superior outcomes.
      </p>
    </section>

    <section class="mt-12">
      <h3 class="text-2xl font-bold text-font text-center mb-8">Key Features</h3>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="feature in features" :key="feature.title" 
             class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h4 class="font-semibold text-lg text-font">{{ feature.title }}</h4>
          <p class="text-text mt-2 leading-relaxed">
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
    title: "Lifelike Patient Scenarios",
    description: "Empowers healthcare practitioners with immersive simulations that mirror real patient interactions, fostering skill refinement and enhanced decision-making."
  },
  {
    title: "Advanced Technology Integration",
    description: "Utilizes cutting-edge tools like ChatGPT and Generative AI to dynamically generate scenarios based on real-world data, enhancing decision-making in diverse medical contexts."
  },
  {
    title: "RAG Integration",
    description: "Enhances simulations by using Retrieval-Augmented Generation technology, accessing extensive knowledge repositories to amplify scenario depth and relevance."
  },
  {
    title: "Cloud Infrastructure",
    description: "Built on AWS and modern cloud technologies, our platform ensures scalability, security, and global accessibility for seamless user engagement."
  },
  {
    title: "Big Data Analytics",
    description: "Harnesses Big Data analytics to extract actionable insights from user interactions, continuously refining simulation accuracy and effectiveness."
  }
];
</script>
