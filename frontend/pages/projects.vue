<script setup>
definePageMeta({
  layout: "landing",
  meta: [
    { hid: 'description', name: 'description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'og:title', property: 'og:title', content: 'Our Projects - Merix' },
    { hid: 'og:description', property: 'og:description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'og:image', property: 'og:image', content: '/assets/img/greenhouse-hero.jpg' },
    { hid: 'og:url', property: 'og:url', content: 'https://merix.com/projects' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Our Projects - Merix' },
    { hid: 'twitter:description', name: 'twitter:description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'twitter:image', name: 'twitter:image', content: '/assets/img/greenhouse-hero.jpg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            url: 'https://merix.com/projects/ai-crop-monitoring',
            name: 'AI-Assisted Crop Monitoring'
          },
          {
            '@type': 'ListItem',
            position: 2,
            url: 'https://merix.com/projects/smart-irrigation',
            name: 'Smart Irrigation System'
          }
        ]
      }
    }
  ]
});
</script>

<template>
  <div>
    <!-- Content here -->
  </div>
</template>
