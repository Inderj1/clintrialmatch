<script setup>
import { ref } from 'vue';
import logo from '~/assets/img/ORY.png';
import screenshot from '~/assets/img/QMU_screenshot.png';

definePageMeta({
    layout: "landing",
    title: "What's New - Orynx",
    meta: [
        { hid: 'description', name: 'description', content: "Stay updated with the latest news and developments from Orynx." },
        { hid: 'og:title', property: 'og:title', content: "What's New - Orynx" },
        { hid: 'og:description', property: 'og:description', content: "Stay updated with the latest news and developments from Orynx." },
        { hid: 'og:image', property: 'og:image', content: logo },
        { hid: 'og:url', property: 'og:url', content: 'https://www.orynx.co.uk/whatsnew' },
        { hid: 'twitter:title', name: 'twitter:title', content: "What's New - Orynx" },
        { hid: 'twitter:description', name: 'twitter:description', content: "Stay updated with the latest news and developments from Orynx." },
        { hid: 'twitter:image', name: 'twitter:image', content: logo },
    ],
    script: [
        {
            type: 'application/ld+json',
            json: {
                '@context': 'https://schema.org',
                '@type': 'NewsArticle',
                headline: "Five remarkable QMU innovators could turn unique business ideas into reality",
                datePublished: '2024-05-14',
                description: 'Orynx is paving the way in new AI driven technology for universities and hospitals. We are now part of Kickstart Converge challenge.',
                image: logo,
                author: {
                    '@type': 'Organization',
                    name: 'Orynx'
                },
                publisher: {
                    '@type': 'Organization',
                    name: 'Orynx',
                    logo: {
                        '@type': 'ImageObject',
                        url: logo
                    }
                }
            }
        }
    ]
});

const newsItems = ref([
    {
        id: 1,
        title: 'Five remarkable QMU innovators could turn unique business ideas into reality',
        description: 'Orynx is paving the way in new AI driven technology for universities and hospitals. We are now part of Kickstart Converge challenge.',
        link: 'https://www.qmu.ac.uk/news-and-events/news/2024/20240514-five-remarkable-qmu-innovators-could-turn-unique-business-ideas-into-reality/?',
        image: screenshot
    }
]);
</script>

<template>
    <main class="w-full pt-4 pb-8 md:pt-4">
        <div class="p-12 md:order-1 hidden md:block text-center">
            <!-- <img class="rounded-full transition-transform transform hover:scale-125 enlarged-img"
          src="~/assets/img/WhatsNew.png" alt="What's New Banner" loading="eager" format="avif" /> -->
        </div>

        <div class="w-full text-center">
            <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-black">
                News
            </h1>
            <div class="text-lg mt-2 text-slate-600 mx-auto px-4 md:px-8 max-w-7xl">
                <section v-for="news in newsItems" :key="news.id" class="update-item">
                    <h2 class="text-2xl font-semibold text-black">{{ news.title }}</h2>
                    <p class="text-black">{{ news.description }}</p>
                    <a :href="news.link" target="_blank" class="text-blue-600 hover:underline">Read more</a>
                    <a v-if="news.id === 1" :href="news.link" target="_blank">
                        <img :src="news.image" alt="QMU Screenshot" class="rounded mt-4" />
                    </a>
                </section>
            </div>
        </div>
    </main>
</template>

<style scoped>
.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    padding: 2rem;
}

.hero-title {
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 1rem;
}

.hero-subtext {
    font-size: 1.75rem;
    color: #4a5568;
    max-width: 600px;
    margin-bottom: 2rem;
}

.enlarged-img {
    width: 800px;
    height: 800px;
}

.update-item {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
}

.update-item h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
}

.update-item p {
    font-size: 1rem;
    color: #555;
}

.update-item a {
    font-size: 1rem;
    color: #3182ce;
}
</style>
