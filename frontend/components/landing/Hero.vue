<script setup>
// No script needed for this simplified version
</script>

<template>
  <main class="hero-container min-h-screen flex flex-col items-center justify-center relative w-full">
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
    <div class="container mx-auto px-6 py-32 relative z-10">
      <div class="flex flex-col items-start justify-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-3xl">
          Sustainable Solutions for Modern Agriculture
        </h1>
        <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Leading the way in biological crop protection and natural pollination
        </p>
        <div class="flex gap-4">
          <a href="/crops" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Explore Solutions
          </a>
          <a href="/contact" class="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium backdrop-blur-sm transition-colors">
            Contact Us
          </a>
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
  background-image: url('/arm.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
}
</style>
