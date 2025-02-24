<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white shadow rounded-lg">
        <!-- Header -->
        <div class="px-6 py-4 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
            <button
              @click="handleLogout"
              class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <!-- Main Content -->
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Trial Information -->
            <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Trial Information</h3>
              <p class="text-gray-600">Access your current trial details and schedule.</p>
              <button class="mt-4 text-blue-600 hover:text-blue-800">View Details →</button>
            </div>

            <!-- Appointments -->
            <div class="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Appointments</h3>
              <p class="text-gray-600">Schedule and manage your appointments.</p>
              <button class="mt-4 text-green-600 hover:text-green-800">Manage Schedule →</button>
            </div>

            <!-- Documents -->
            <div class="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
              <p class="text-gray-600">Access and upload trial-related documents.</p>
              <button class="mt-4 text-purple-600 hover:text-purple-800">View Documents →</button>
            </div>
          </div>

          <!-- Upcoming Appointments -->
          <div class="mt-8">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
              <ul class="divide-y divide-gray-200">
                <li class="px-6 py-4">No upcoming appointments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  // Check if user is logged in
  const role = localStorage.getItem('role')
  if (!role || role !== 'Patient') {
    router.push('/patient/login')
  }
})

const handleLogout = () => {
  localStorage.removeItem('role')
  router.push('/patient/login')
}

definePageMeta({
  layout: 'landing'
})
</script>
