x``<script setup>
import { ref } from 'vue'

const isVideoPlaying = ref(false)

const toggleVideo = () => {
  isVideoPlaying.value = trueziez
}
</script>

<template>
  <main class="hero-container min-h-screen flex flex-col items-center justify-center relative w-full">
    <div class="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-[2px]"></div>
    <div class="container mx-auto px-6 py-32 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div class="w-full md:w-3/5 lg:w-2/3 flex flex-col items-start justify-center">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight text-left">
            <span class="text-[#DCDCDC] bg-clip-text">AI-Powered Healthcare Revolution</span>
          </h1>
          <p class="text-lg md:text-xl text-[#DCDCDC] mb-8 max-w-2xl text-left leading-relaxed">
            Pioneering Healthcare Innovation through dual innovation: cutting-edge AI-powered clinical decision support for healthcare professionals and an immersive medical education platform. Our solutions transform both patient care and professional training, featuring advanced analysis tools and personalized learning experiences. Trusted by leading hospitals and universities worldwide.
          </p>
          <div class="flex flex-col sm:flex-row justify-start gap-4">
            <a href="/about" 
               class="px-8 py-4 bg-[#000000] text-white rounded-xl font-semibold 
                      hover:shadow-lg hover:shadow-font/30 transform hover:-translate-y-0.5 transition-all duration-300">
              Learn More
            </a>
            <button @click="toggleVideo"
                    class="px-8 py-4 border-2 border-[#F8FAFC] text-[#F8FAFC] rounded-xl font-semibold 
                           hover:bg-[#F8FAFC] hover:text-black transform hover:-translate-y-0.5 transition-all duration-300
                           hover:shadow-lg hover:shadow-[#F8FAFC]/20 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
        <div class="w-full md:w-2/5 lg:w-1/3 flex justify-center md:justify-end">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            <div class="relative rounded-full bg-white p-2 shadow-2xl">
              <img src="/assets/img/KickStart.png" alt="KickStart" class="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full transform group-hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-6 relative z-10 mt-12">
      <div v-if="isVideoPlaying" 
           class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm"
           @click.self="isVideoPlaying = false">
        <div class="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <button @click="isVideoPlaying = false" 
                  class="absolute top-4 right-4 text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <video 
            class="w-full aspect-video object-cover"
            controls
            autoplay
            src="/demo.mp4"
            @error="(e) => console.error('Video error:', e.target.error)"
            @loadeddata="() => console.log('Video loaded successfully')">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background: #002a4f;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
}
</style>
