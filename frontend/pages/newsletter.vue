<template>
  <div class="container mx-auto px-6 py-24">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">Newsletter</h1>
      <p class="text-lg text-gray-600 mb-12">Stay updated with the latest trends in healthcare technology and patient engagement.</p>
      
      <div class="bg-white p-8 rounded-2xl shadow-lg">
        <form class="space-y-6">
          <div>
            <input 
              type="email" 
              placeholder="Enter your email"
              class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB5A0] focus:border-transparent outline-none"
            />
          </div>
          <button 
            type="submit"
            class="w-full bg-[#FFB5A0] text-white px-6 py-3 rounded-lg hover:bg-[#ff9c80] transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
