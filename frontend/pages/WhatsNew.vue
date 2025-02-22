<script setup>
definePageMeta({
  layout: "landing",
  title: "What's New - CropMatrix",
  meta: [
    { hid: 'description', name: 'description', content: 'Stay updated with the latest news and developments from CropMatrix.' },
    { hid: 'og:title', property: 'og:title', content: "What's New - CropMatrix" },
    { hid: 'og:description', property: 'og:description', content: 'Stay updated with the latest news and developments from CropMatrix.' },
    { hid: 'og:image', property: 'og:image', content: '/assets/img/cropmatrix-logo.svg' },
    { hid: 'og:url', property: 'og:url', content: 'https://www.cropmatrix.com/whatsnew' },
    { hid: 'twitter:title', name: 'twitter:title', content: "What's New - CropMatrix" },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Stay updated with the latest news and developments from CropMatrix.' },
    { hid: 'twitter:image', name: 'twitter:image', content: '/assets/img/cropmatrix-logo.svg' }
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'Five remarkable QMU innovators could turn unique business ideas into reality',
        datePublished: '2024-05-14',
        description: 'CropMatrix is paving the way in new AI driven technology for universities and hospitals. We are now part of Kickstart Converge challenge.',
        image: '/assets/img/cropmatrix-logo.svg',
        author: {
          '@type': 'Organization',
          name: 'CropMatrix'
        },
        publisher: {
          '@type': 'Organization',
          name: 'CropMatrix',
          logo: {
            '@type': 'ImageObject',
            url: '/assets/img/cropmatrix-logo.svg'
          }
        }
      }
    }
  ]
});
</script>

<template>
  <div>What's New Page Content</div>
</template>
