<template>
  <nav class="fixed top-0 left-0 w-full backdrop-blur-sm shadow-sm z-50 bg-[#eaeaea]">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <picture>
          <source srcset="@/assets/img/webp/ORY.webp" type="image/webp">
          <source srcset="@/assets/img/ORY.png" type="image/png">
          <img src="@/assets/img/ORY.png" alt="ORYNX Logo" class="h-10 w-auto md:h-12">
        </picture>
      </nuxt-link>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <nuxt-link 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.path"
          class="text-font hover:text-header transition-colors duration-300 font-medium">
          {{ item.title }}
        </nuxt-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 rounded-lg hover:bg-background/10 transition-colors duration-300">
        <svg 
          v-show="!isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-font"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
          v-show="isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-font"
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
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300">
      <div class="container mx-auto px-4 py-2">
        <nuxt-link 
          v-for="item in menuItems" 
          :key="item.title"
          :to="item.path"
          class="block py-3 text-font hover:text-header hover:bg-background/10 px-4 rounded-lg transition-colors duration-300"
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
        { title: "Projects", path: "/projects" },
        { title: "About", path: "/about" },
        { title: "What's New", path: "/whatsnew" },
        { title: "Partners", path: "/partners" },
        { title: "Contact", path: "/contact" },
      ],
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
