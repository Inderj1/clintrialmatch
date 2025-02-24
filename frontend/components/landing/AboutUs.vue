<template>
  <section class="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/health-heart.jpg')] opacity-5 bg-cover bg-center"></div>
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column - Content -->
        <div class="order-2 lg:order-1">
          <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Revolutionizing Clinical Trial Enrollment
          </h2>
          <div class="space-y-6 text-gray-600">
            <p class="text-lg leading-relaxed">
              At Merix, we're dedicated to transforming the clinical trial landscape through innovative technology. Our AI-driven platform streamlines the enrollment process, making it more efficient and accessible for both healthcare providers and patients.
            </p>
            <p class="text-lg leading-relaxed">
              Founded by healthcare and technology experts, we understand the challenges faced by modern medical practices. Our solution combines cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-8 mt-12">
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 class="text-4xl font-bold mb-2 text-[#FFB5A0]">98%</h3>
              <p class="text-gray-600">Patient Satisfaction Rate</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 class="text-4xl font-bold mb-2 text-[#FFB5A0]">2x</h3>
              <p class="text-gray-600">Faster Trial Enrollment</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Image Grid -->
        <div class="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <div class="bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/aboutus.jpg" 
                alt="Healthcare Professional"
                class="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div class="bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/glasses.jpg" 
                alt="Medical Research"
                class="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
          <div class="space-y-4 mt-8">
            <div class="bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/arm.jpg" 
                alt="Patient Care"
                class="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div class="bg-gradient-to-br from-[#FFB5A0] to-[#ff9c80] p-2 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/health-heart.jpg" 
                alt="Healthcare Technology"
                class="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
