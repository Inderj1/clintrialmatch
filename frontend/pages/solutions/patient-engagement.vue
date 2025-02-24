<template>
  <div class="min-h-screen bg-white py-20">
    <div class="container mx-auto px-4 mt-16">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900">Revolutionize Your Clinical Trials with AI-Powered Intelligence</h1>
        <NuxtLink 
          to="/patient/login"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          Patient Login
          <span class="text-xl">→</span>
        </NuxtLink>
      </div>
      <div class="prose max-w-none">
        <p class="text-2xl text-blue-600 font-semibold mb-8">
          Join over 10,000 leading healthcare providers who've achieved 40% higher patient retention while reducing trial duration by 60% using our AI-powered engagement solutions.
        </p>
        <div class="flex gap-4 mb-12">
          <a href="/demo" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Your Custom Solution
          </a>
          <a href="/case-studies" class="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
            View Success Stories
          </a>
        </div>
        <p class="text-lg text-gray-600 mb-8">
          Start transforming your clinical trials with a free consultation and patient engagement analysis
        </p>
        <div class="grid md:grid-cols-2 gap-8 mt-12">
          <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">AI-Powered Patient Portal</h3>
            <p class="text-gray-600">
              Empower trial participants with intelligent 24/7 access to trial information, smart scheduling, and AI-guided communication tools.
            </p>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Predictive Communications</h3>
            <p class="text-gray-600">
              Enhance trial adherence with AI-driven reminders, personalized follow-ups, and smart engagement tracking.
            </p>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Intelligent Trial Education</h3>
            <p class="text-gray-600">
              Deliver adaptive educational content and protocol information through our AI-powered learning platform.
            </p>
          </div>
          <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
            <p class="text-gray-600">
              Monitor trial progress with advanced analytics, predictive insights, and automated compliance tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})
</script>
