<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 mx-auto">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Merix
        </h2>
      </div>

      <!-- Tabs -->
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            @click="currentTab = tab.id"
            :class="[
              currentTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Provider Login Tab -->
      <div v-if="currentTab === 'provider'" class="mt-8">
        <form class="space-y-6" @submit.prevent="handleProviderLogin">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="provider-email" class="sr-only">Email address</label>
              <input
                id="provider-email"
                name="email"
                type="email"
                autocomplete="email"
                required
                v-model="providerEmail"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="provider-password" class="sr-only">Password</label>
              <input
                id="provider-password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="providerPassword"
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="provider-remember-me"
                name="remember-me"
                type="checkbox"
                v-model="providerRememberMe"
                class="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label for="provider-remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-primary hover:text-primary-dark">
                Forgot password?
              </a>
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="rounded-md bg-red-50 p-4 mb-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm text-red-700">{{ error }}</p>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              :disabled="providerLoading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
            >
              <span v-if="providerLoading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {{ providerLoading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Patient Portal Tab -->
      <div v-if="currentTab === 'patient'" class="mt-8 text-center">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="text-xl font-medium text-gray-900 mb-4">Patient Portal</h3>
          <p class="text-gray-600 mb-6">
            Our patient portal is coming soon. Stay tuned for updates!
          </p>
          <img
            src="/health-heart.jpg"
            alt="Patient Care"
            class="mx-auto rounded-lg max-w-xs"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const { $auth } = useNuxtApp()
const router = useRouter()

const tabs = [
  { id: 'provider', name: 'Provider Login' },
  { id: 'patient', name: 'Patient Portal' }
]

const route = useRoute()
const currentTab = ref(route.query.tab as string || 'provider')

// Provider login state
const providerEmail = ref('')
const providerPassword = ref('')
const providerRememberMe = ref(false)
const providerLoading = ref(false)
const error = ref('')

const handleProviderLogin = async () => {
  providerLoading.value = true
  error.value = ''
  
  try {
    await signInWithEmailAndPassword($auth, providerEmail.value, providerPassword.value)
    if (providerRememberMe.value) {
      localStorage.setItem('rememberMe', 'true')
    }
    router.push('/dashboard')
  } catch (e: any) {
    error.value = e.message || 'Failed to login. Please try again.'
  } finally {
    providerLoading.value = false
  }
}
</script>
