<template>
  <div class="bg-green-50 px-8 md:px-20 py-20 mt-20 mx-auto max-w-6xl rounded-2xl relative overflow-hidden">
    <div class="absolute inset-0 bg-[url('/assets/img/greenhouse-hero.jpg')] opacity-10 bg-cover bg-center"></div>
    <div class="relative z-10 max-w-3xl">
      <h2 class="text-gray-900 text-3xl md:text-5xl font-bold leading-tight">
        Ready to Transform Your Crop Protection Strategy?
      </h2>
      <p class="text-gray-600 mt-6 text-lg md:text-xl leading-relaxed">
        Join thousands of growers worldwide who trust our sustainable biological solutions for healthier crops and better yields.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="/contact" 
           class="inline-flex items-center justify-center bg-green-600 text-white font-semibold py-3 px-8 rounded-lg 
                  hover:bg-green-700 transform hover:-translate-y-0.5 transition-all duration-300">
          Contact Our Experts
        </a>
        <a href="/crops" 
           class="inline-flex items-center justify-center bg-white text-green-600 font-semibold py-3 px-8 rounded-lg 
                  border-2 border-green-600 hover:bg-green-50 transform hover:-translate-y-0.5 transition-all duration-300">
          Explore Solutions
        </a>
      </div>
      <p class="mt-6 text-gray-500 text-sm">
        Get personalized advice tailored to your specific crop needs
      </p>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-overlay {
  background: linear-gradient(135deg, rgba(22, 163, 74, 0.05) 0%, rgba(21, 128, 61, 0.1) 100%);
}
</style>
