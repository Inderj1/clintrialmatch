<template>
  <div class="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/public/health-heart.jpg')] opacity-5 bg-cover bg-center"></div>
    <div class="container mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Cutting-Edge Healthcare Technology
        </h2>
        <p class="text-lg text-gray-600">
          Powered by advanced technologies to deliver the best patient experience
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
        <div v-for="tech in technologies" :key="tech.name"
             class="flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] text-white rounded-xl">
            <Icon :name="tech.icon" class="text-3xl" />
          </div>
          <h3 class="text-gray-900 font-semibold text-lg mb-3 text-center">{{ tech.name }}</h3>
          <p class="text-gray-600 text-center text-sm leading-relaxed">{{ tech.description }}</p>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Our Commitment to Excellence</h3>
          <p class="text-lg text-gray-600">Delivering innovative solutions for modern healthcare practices</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-16 h-16 mb-6 mx-auto flex items-center justify-center bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] text-white rounded-xl">
              <span class="text-2xl">💡</span>
            </div>
            <h4 class="text-xl font-semibold mb-4 text-gray-900 text-center">Innovation</h4>
            <p class="text-gray-600 text-center leading-relaxed">Continuous advancement in digital health solutions</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-16 h-16 mb-6 mx-auto flex items-center justify-center bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] text-white rounded-xl">
              <span class="text-2xl">🔒</span>
            </div>
            <h4 class="text-xl font-semibold mb-4 text-gray-900 text-center">Security</h4>
            <p class="text-gray-600 text-center leading-relaxed">Enterprise-grade security for patient data protection</p>
          </div>
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-16 h-16 mb-6 mx-auto flex items-center justify-center bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] text-white rounded-xl">
              <span class="text-2xl">📱</span>
            </div>
            <h4 class="text-xl font-semibold mb-4 text-gray-900 text-center">Accessibility</h4>
            <p class="text-gray-600 text-center leading-relaxed">Mobile-first design for seamless patient engagement</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const technologies = [
  {
    name: "AI-Powered Matching",
    description: "Advanced algorithms for precise patient-trial matching based on clinical data",
    icon: "mdi:brain"
  },
  {
    name: "Secure Data Platform",
    description: "HIPAA-compliant infrastructure for sensitive patient information",
    icon: "mdi:shield-lock"
  },
  {
    name: "Real-time Analytics",
    description: "Comprehensive dashboards for monitoring trial progress and outcomes",
    icon: "mdi:chart-box"
  },
  {
    name: "Mobile Integration",
    description: "Seamless mobile experience for patients and healthcare providers",
    icon: "mdi:cellphone"
  },
  {
    name: "Smart Notifications",
    description: "Automated reminders and updates for improved patient engagement",
    icon: "mdi:bell-ring"
  },
  {
    name: "Document Management",
    description: "Digital handling of consent forms and trial documentation",
    icon: "mdi:file-document"
  },
  {
    name: "Compliance Tools",
    description: "Built-in features to ensure regulatory compliance",
    icon: "mdi:check-circle"
  },
  {
    name: "API Integration",
    description: "Seamless connection with existing healthcare systems",
    icon: "mdi:api"
  }
];
</script>
