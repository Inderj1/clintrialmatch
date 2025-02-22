<script setup>
definePageMeta({
  layout: "landing",
  title: "Our Projects - CropMatrix",
  meta: [
    { hid: 'description', name: 'description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'og:title', property: 'og:title', content: 'Our Projects - CropMatrix' },
    { hid: 'og:description', property: 'og:description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'og:image', property: 'og:image', content: 'https://cropmatrix.com/path/to/logo.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://cropmatrix.com/projects' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Our Projects - CropMatrix' },
    { hid: 'twitter:description', name: 'twitter:description', content: "Discover how we're revolutionizing agriculture through innovative AI and ML solutions." },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://cropmatrix.com/path/to/logo.png' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'CropMatrix Agriculture AI Projects',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            url: 'https://cropmatrix.com/projects/ai-crop-monitoring',
            name: 'AI-Assisted Crop Monitoring',
            description: 'Advanced monitoring system using AI and machine learning to optimize crop health and yield.'
          },
          {
            '@type': 'ListItem',
            position: 2,
            url: 'https://cropmatrix.com/projects/smart-irrigation',
            name: 'Smart Irrigation System',
            description: 'Intelligent irrigation management using real-time data and predictive analytics.'
          }
        ]
      }
    }
  ]
});
</script>

<template>
  <div>Projects Page Content</div>
</template>
