<script setup>
definePageMeta({
  layout: "landing",
  title: "CropMatrix",
  meta: [
    { hid: 'description', name: 'description', content: 'Sustainable Solutions for Modern Agriculture' },
    { hid: 'og:title', property: 'og:title', content: 'CropMatrix' },
    { hid: 'og:description', property: 'og:description', content: 'Leading the way in biological crop protection and natural pollination' },
    { hid: 'og:image', property: 'og:image', content: '/assets/img/greenhouse-hero.jpg' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.cropmatrix.com' },
  ]
});

import Hero from "../components/landing/Hero.vue";
import AboutUs from "../components/landing/AboutUs.vue";
import Features from "../components/landing/Features.vue";
import Technologies from "../components/landing/Technologies.vue";
import Logos from "../components/landing/Logos.vue";
import Etfs from "../components/landing/Etfs.vue";
import Cta from "../components/landing/Cta.vue";
import Contactform from "../components/landing/Contactform.vue";
</script>

<template>
  <div class="overflow-hidden">
    <Hero />
    <AboutUs />
    <Features />
    <Technologies />
    <Logos />
    <Etfs />
    <Cta />
    <Contactform />
  </div>
</template>
