<script setup>
definePageMeta({
  layout: "landing",
  title: "Merix - Patient Engagement & Practice Growth Platform",
  meta: [
    { hid: 'description', name: 'description', content: 'Increase revenue and deliver the best patient experience with our mobile app platform for aesthetic and wellness practices.' },
    { hid: 'og:title', property: 'og:title', content: 'Merix - Patient Engagement & Practice Growth Platform' },
    { hid: 'og:description', property: 'og:description', content: 'Increase revenue and deliver the best patient experience with our mobile app platform for aesthetic and wellness practices.' },
    { hid: 'og:image', property: 'og:image', content: '/public/health-heart.jpg' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.merix.com' },
  ]
});

import Hero from "../components/landing/Hero.vue";
import Features from "../components/landing/Features.vue";
import MobileApp from "../components/landing/MobileApp.vue";
import Technologies from "../components/landing/Technologies.vue";
import Cta from "../components/landing/Cta.vue";
</script>

<template>
  <div class="overflow-hidden">
    <Hero />
    <Features />
    <MobileApp />
    <Technologies />
    <Cta />
  </div>
</template>
