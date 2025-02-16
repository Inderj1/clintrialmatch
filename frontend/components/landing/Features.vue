<template>
  <div class="mt-32 md:mt-24">
    <!-- Features Section -->
    <div class="text-right">
      <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-font">
        Explore AI Innovations in Healthcare
      </h2>
      <p class="text-lg mt-4 text-text">
        Bridging Technology with Medical Excellence
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-16 mt-10">
      <div v-for="item in features" :key="item.title" class="flex gap-4 items-start">
        <div class="mt-1 bg-gradient-to-r from-header to-background rounded-full p-2 w-8 h-8 shrink-0">
          <Icon class="text-white" :name="item.icon" />
        </div>
        <div class="text-right">
          <h3 class="font-semibold text-2xl text-font">{{ item.title }}</h3>
          <p class="text-text mt-2 leading-relaxed">
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
    title: "AI-Powered Diagnostics",
    description: "Use AI algorithms for quick and accurate patient diagnostics, enhancing healthcare outcomes.",
    icon: "mdi:brain",
  },
  {
    title: "Machine Learning Insights",
    description: "Utilize ML to uncover patterns and predictions in health data, enabling personalized medicine and proactive health management.",
    icon: "mdi:chart-line",
  },
  {
    title: "Simulation Learning for Training",
    description: "Enhance medical training and preparedness through realistic simulation learning platforms, bridging the gap between theory and practice.",
    icon: "mdi:virtual-reality",
  },
  {
    title: "Deep Learning in Medical Imaging",
    description: "Deploy deep learning models to interpret medical images with greater precision, aiding in early detection and treatment planning.",
    icon: "mdi:magnify",
  },
  {
    title: "Infrastructure as Code (IaC) Tools",
    description: "Implement IaC tools to automate and manage healthcare IT infrastructures, ensuring scalability, security, and compliance.",
    icon: "mdi:code-json",
  },
  {
    title: "HIPAA Compliance & Data Security",
    description: "Ensure data protection and compliance with healthcare regulations such as HIPAA, safeguarding patient information.",
    icon: "mdi:security",
  },
];
</script>
