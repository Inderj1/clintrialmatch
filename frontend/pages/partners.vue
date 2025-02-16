<script setup>
import Sectionhead from "../components/landing/Sectionhead.vue";

definePageMeta({
  layout: "landing"
});
</script>

<template>
  <div class="pt-32 pb-24 bg-gradient-to-b from-white to-background-light min-h-screen">
    <div class="container mx-auto px-4 max-w-6xl">
      <Sectionhead>
        <template #title>Our Sponsors and Technology Partners</template>
      </Sectionhead>
      <p class="text-xl text-gray-600 mt-6 mb-16 max-w-3xl">
        At Orynx, we believe that great partnerships are the cornerstone of success. We are proud to collaborate with a diverse network of partners who share our vision for transforming healthcare through technology.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 mx-auto">
        <div class="bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all">
          <div class="flex items-center mb-6 md:mb-8">
            <div class="w-full max-w-[200px] h-16 md:h-24 flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" alt="Microsoft Logo" class="h-16" />
            </div>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">Microsoft Founders Hub Partner</h3>
            <p class="text-gray-600">
              Our Microsoft Founders Hub partnership provides Azure cloud funding up to $150K along with comprehensive AI resources. This strategic alliance gives us access to enterprise infrastructure and dedicated engineering support, with staged benefits that scale as our startup grows.
            </p>
            <div class="pt-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Key Benefits:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>Up to $150K in Azure cloud credits</li>
                <li>Access to comprehensive AI resources and tools</li>
                <li>Dedicated engineering support and infrastructure</li>
                <li>Staged benefits that scale with growth</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all">
          <div class="flex items-center mb-6 md:mb-8">
            <div class="w-full max-w-[200px] h-16 md:h-24 flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" alt="NVIDIA Logo" class="h-16" />
            </div>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">NVIDIA Inception Start-ups</h3>
            <p class="text-gray-600">
              As a certified NVIDIA Inception member, we harness NVIDIA-powered solutions to accelerate our development. This strategic alliance provides access to cutting-edge tools and frameworks, enabling seamless platform integration and optimization. Our partnership strengthens infrastructure capabilities while ensuring compatibility across the technology stack, driving innovation through collaborative development.
            </p>
            <div class="pt-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Case Studies:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>Accelerated medical image processing using NVIDIA GPUs</li>
                <li>Developed advanced neural networks for disease prediction</li>
                <li>Optimized AI model training with NVIDIA's healthcare frameworks</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all">
          <div class="flex items-center mb-6 md:mb-8">
            <div class="w-full max-w-[200px] h-16 md:h-24 flex items-center gap-4">
              <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" class="h-12" />
            </div>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">Google Startups Accelerator Program</h3>
            <p class="text-gray-600">
              As per our technology partnership,  we are funded by Google with cloud credits and advanced technology resources. This strategic support enables us to leverage the full power of Google Cloud Platform, including enterprise-grade infrastructure, cutting-edge development tools, and scalable solutions. Through this partnership, we're positioned to build innovative solutions with industry-leading cloud technology.
            </p>
            <div class="pt-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Case Studies:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>Implemented healthcare analytics using Google Cloud Healthcare API</li>
                <li>Enhanced diagnostic accuracy with Google's AI models</li>
                <li>Developed telehealth solutions using Google Cloud infrastructure</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl p-6 md:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all">
          <div class="flex items-center mb-6 md:mb-8">
            <div class="w-full max-w-[200px] h-16 md:h-24 flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" class="h-12" />
            </div>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">AI & Cloud Innovation Partner</h3>
            <p class="text-gray-600">
              As a trusted cloud partner, we utilize AWS's comprehensive suite of services to build secure and scalable healthcare solutions. Their robust infrastructure enables us to deliver reliable and compliant healthcare applications.
            </p>
            <div class="pt-4">
              <h4 class="text-lg font-semibold text-gray-800 mb-3">Case Studies:</h4>
              <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li>Implemented HIPAA-compliant data storage with AWS S3</li>
                <li>Built real-time analytics using AWS HealthLake</li>
                <li>Deployed secure telehealth solutions on AWS infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
