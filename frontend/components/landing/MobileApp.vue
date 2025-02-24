<template>
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/public/health-heart.jpg')] opacity-5 bg-cover bg-center"></div>
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column - iPhone Image -->
        <div class="relative flex justify-center lg:justify-end">
          <div class="relative w-[300px] h-[600px] bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] rounded-[3rem] p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <div class="absolute inset-0 bg-[#FFB5A0] rounded-full opacity-50 blur-3xl -z-10 transform scale-150 animate-pulse"></div>
            <div class="w-full h-full bg-white rounded-[2.5rem] overflow-hidden shadow-xl">
              <img 
                src="/health-heart.jpg" 
                alt="Mobile App Interface"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="flex flex-col items-start lg:pl-12">
          <span class="text-[#FFB5A0] font-semibold mb-4">ACCELERATE YOUR TRIALS</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Struggling to meet enrollment targets and timelines?
          </h2>
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Powered by our signature <span class="font-semibold text-gray-900">TrialMatch™ Engine</span>, we make it easy for your sites to recruit qualified participants from your digital outreach platform, 24/7, all year round - just like the biggest research organizations in the world.
          </p>
          <a href="/demo" 
            class="bg-gradient-to-r from-[#FFB5A0] to-[#ff9c80] text-white px-10 py-4 rounded-lg hover:shadow-xl transition-all duration-300 text-lg font-medium transform hover:-translate-y-1">
            BOOK A DEMO
          </a>
        </div>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="container mx-auto px-6 mt-24">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Testimonials
          </h3>
          <p class="text-lg text-gray-600">See what our clients are saying about their experience with us.</p>
        </div>

        <!-- Testimonial Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Testimonial 1 -->
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-[#FFB5A0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">Dr. Sarah Mitchell</h4>
                <p class="text-gray-600 text-sm">Dermatology Clinic</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">"Merix has transformed how we engage with patients. The mobile app has significantly boosted our membership sales."</p>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-[#FFB5A0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div class="ml-4">
                <h4 class="font-semibold text-gray-900">Dr. Michael Chen</h4>
                <p class="text-gray-600 text-sm">Wellness Center</p>
              </div>
            </div>
            <p class="text-gray-600 leading-relaxed">"The patient engagement features have helped us maintain stronger relationships with our clients. Highly recommended!"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1280px;
}
</style>
