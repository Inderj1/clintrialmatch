<template>
  <nav class="fixed top-0 left-0 w-full z-[100] bg-navbar shadow-sm">
    <!-- Announcement Banner -->
    <div class="w-full bg-[#872341] text-white text-center py-2 text-sm">
      Meet the Top 100 Trailblazers — aesthetic and wellness practices that redefined the patient experience.
      <button class="ml-2 font-medium hover:underline">Click to Read</button>
      <button @click="closeBanner" class="absolute right-4 top-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Main Navigation -->
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <span class="text-2xl font-bold text-primary-dark">Merix</span>
      </nuxt-link>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <div class="flex items-center space-x-6">
          <template v-for="item in menuItems" :key="item.title">
            <!-- Regular Menu Item -->
            <nuxt-link 
              v-if="!item.hasDropdown"
              :to="item.path"
              class="text-lg text-primary-dark hover:text-primary-dark/80 transition-colors duration-300">
              {{ item.title }}
            </nuxt-link>
            
            <!-- Dropdown Menu Item -->
            <div 
              v-else
              class="relative"
              @mouseenter="activeDropdown = item.title"
              @mouseleave="activeDropdown = null"
              @click="toggleDropdown(item.title)">
              <button 
                class="flex items-center text-lg text-primary-dark hover:text-primary-dark/80 transition-colors duration-300"
                type="button">
                {{ item.title }}
                <svg 
                  class="w-4 h-4 ml-1"
                  :class="{ 'transform rotate-180': activeDropdown === item.title }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <!-- Dropdown Content -->
              <transition name="dropdown">
                <div 
                  v-show="activeDropdown === item.title"
                  class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[200] border border-gray-100">
                  <nuxt-link
                    v-for="dropdownItem in item.dropdownItems"
                    :key="dropdownItem.title"
                    :to="dropdownItem.path"
                    class="block px-4 py-2 text-sm text-primary-dark hover:bg-gray-100 hover:text-primary-dark/80 transition-colors duration-300">
                    {{ dropdownItem.title }}
                  </nuxt-link>
                </div>
              </transition>
            </div>
          </template>
        </div>
        <div class="flex items-center space-x-4 ml-6">
          <nuxt-link to="/contact" class="px-4 py-2 text-primary-dark bg-[#fdc500] hover:bg-[#fdc500]/90 rounded-md transition-colors duration-300">Get In Touch</nuxt-link>
        </div>
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
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
      <div class="container mx-auto px-4 py-2">
        <template v-for="item in menuItems" :key="item.title">
          <!-- Regular Mobile Menu Item -->
          <nuxt-link 
            v-if="!item.hasDropdown"
            :to="item.path"
            class="block py-3 text-lg text-primary-dark hover:text-primary-dark/80 hover:bg-gray-800 px-4 rounded-lg transition-colors duration-300"
            @click="isOpen = false">
            {{ item.title }}
          </nuxt-link>
          
          <!-- Mobile Dropdown Menu -->
          <div v-else class="py-3 px-4">
            <button 
              class="flex items-center justify-between w-full text-lg text-primary-dark hover:text-primary-dark/80"
              @click="toggleMobileDropdown(item.title)">
              {{ item.title }}
              <svg 
                class="w-4 h-4 ml-1"
                :class="{ 'transform rotate-180': activeMobileDropdown === item.title }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="activeMobileDropdown === item.title"
              class="mt-2 pl-4">
              <nuxt-link
                v-for="dropdownItem in item.dropdownItems"
                :key="dropdownItem.title"
                :to="dropdownItem.path"
                class="block py-2 text-primary-dark hover:text-primary-dark/80 hover:bg-gray-800 rounded-lg transition-colors duration-300"
                @click="isOpen = false">
                {{ dropdownItem.title }}
              </nuxt-link>
            </div>
          </div>
        </template>
        <div class="border-t border-gray-100 mt-2 pt-2">
          <nuxt-link to="/contact" 
            class="block py-3 text-lg text-primary-dark bg-[#fdc500] hover:bg-[#fdc500]/90 px-4 rounded-lg mt-2"
            @click="isOpen = false">
            Get In Touch
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from '#app'

interface MenuItem {
  title: string
  path: string
  hasDropdown?: boolean
  dropdownItems?: Array<{
    title: string
    path: string
  }>
}

// State
const isOpen = ref(false)
const showBanner = ref(true)
const activeDropdown = ref<string | null>(null)
const activeMobileDropdown = ref<string | null>(null)

// Menu items
const menuItems = ref<MenuItem[]>([
  { title: "Platform", path: "/platform" },
  { title: "Case Studies", path: "/case-studies" },
  { title: "Newsletter", path: "/newsletter" },
  { title: "Volunteers", path: "/volunteers" },
  { title: "Patient Portal", path: "/login" },
  { title: "Provider Login", path: "/provider-login" }
])

// Actions
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeBanner = () => {
  showBanner.value = false
}

const toggleDropdown = (title: string) => {
  if (window.innerWidth >= 768) { // Only for desktop
    activeDropdown.value = activeDropdown.value === title ? null : title
  }
}

const toggleMobileDropdown = (title: string) => {
  activeMobileDropdown.value = activeMobileDropdown.value === title ? null : title
}

// Close menus on route change
const router = useRouter()
router.beforeEach(() => {
  isOpen.value = false
  activeDropdown.value = null
  activeMobileDropdown.value = null
})

// Close dropdowns when clicking outside
onMounted(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const dropdowns = document.querySelectorAll('.relative')
    let clickedOutside = true
    dropdowns.forEach(dropdown => {
      if (dropdown.contains(event.target as Node)) {
        clickedOutside = false
      }
    })
    if (clickedOutside) {
      activeDropdown.value = null
      activeMobileDropdown.value = null
    }
  }

  document.addEventListener('click', handleClickOutside)

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>

<style scoped>
.router-link-active {
  color: #3d5a80;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
