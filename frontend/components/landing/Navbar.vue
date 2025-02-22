<template>
  <nav class="fixed top-0 left-0 w-full z-[100]" style="background-color: #f0cd6e; opacity: 0.95;">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <span class="text-2xl font-bold text-gray-900">CropMatrix</span>
      </nuxt-link>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <nuxt-link 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.path"
          class="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-bold">
          {{ item.title }}
        </nuxt-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
        <svg 
          v-show="!isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
          v-show="isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-gray-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isOpen"
      class="md:hidden absolute top-full left-0 w-full shadow-lg transform transition-all duration-300" style="background-color: #f0cd6e; opacity: 0.95;">
      <div class="container mx-auto px-4 py-2">
        <nuxt-link 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.path"
          class="block py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 px-4 rounded-lg transition-colors duration-300 font-bold"
          @click="isOpen = false">
          {{ item.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "Crops", path: "/crops" },
        { title: "Products", path: "/products" },
        { title: "Challenges", path: "/challenges" },
        { title: "Academy", path: "/academy" },
        { title: "Our ETFs", path: "/etfs" },
        { title: "About us", path: "/about" },
      ],
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    // Close mobile menu on route change
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false;
      next();
    });
  }
}
</script>

<style scoped>
.router-link-active {
  color: #4a5568;
  font-weight: 700;
}
</style>
