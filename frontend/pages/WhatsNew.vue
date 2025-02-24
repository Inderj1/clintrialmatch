<script setup>
definePageMeta({
  layout: "landing",
  meta: [
    { hid: 'description', name: 'description', content: 'Stay updated with the latest news and developments from Merix.' },
    { hid: 'og:title', property: 'og:title', content: "What's New - Merix" },
    { hid: 'og:description', property: 'og:description', content: 'Stay updated with the latest news and developments from Merix.' },
    { hid: 'og:image', property: 'og:image', content: '/assets/img/merix-logo.svg' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.merix.com/whatsnew' },
    { hid: 'twitter:title', name: 'twitter:title', content: "What's New - Merix" },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Stay updated with the latest news and developments from Merix.' },
    { hid: 'twitter:image', name: 'twitter:image', content: '/assets/img/merix-logo.svg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'http://schema.org',
        '@type': 'NewsArticle',
        headline: 'Latest Developments at Merix',
        description: 'Merix is paving the way in new AI driven technology for universities and hospitals. We are now part of Kickstart Converge challenge.',
        image: '/assets/img/merix-logo.svg',
        author: {
          '@type': 'Organization',
          name: 'Merix',
          logo: {
            '@type': 'ImageObject',
            url: '/assets/img/merix-logo.svg'
          }
        }
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
