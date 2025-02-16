<script setup>
import { ref } from 'vue';

definePageMeta({
    layout: "landing",
});

const suggestions = ref([
    {
        title: "Visit Our Homepage",
        description: "Go back to the homepage to explore more about our services and offerings.",
        link: "/"
    },

    {
        title: "Contact Us",
        description: "Get in touch with our team for any queries or support.",
        link: "/contact"
    }
]);
</script>

<template>
    <div class="container mx-auto px-4">
        <section class="text-center my-16">
            <h1 class="text-4xl font-bold">Page Not Found</h1>
            <p class="mt-4 text-lg text-gray-500">
                The page you are looking for does not exist. It might have been moved or deleted.
            </p>
        </section>

        <section class="my-16">
            <h2 class="text-3xl font-bold text-center">What can you do?</h2>
            <div class="grid sm:grid-cols-1 lg:grid-cols-3 gap-16 mt-8">
                <div v-for="suggestion in suggestions" :key="suggestion.title" class="flex gap-4 items-start">
                    <div
                        class="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300 ease-in-out">
                        <h3 class="font-semibold text-lg">{{ suggestion.title }}</h3>
                        <p class="text-gray-500 mt-2 leading-relaxed">
                            {{ suggestion.description }}
                        </p>
                        <NuxtLink :to="suggestion.link" class="text-blue-600 hover:underline">Learn more</NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.text-center {
    text-align: center;
}

.text-4xl {
    font-size: 2.5rem;
    line-height: 1.2;
}

.text-3xl {
    font-size: 2rem;
    line-height: 1.3;
}

.text-lg {
    font-size: 1.125rem;
    line-height: 1.75;
}

.font-bold {
    font-weight: bold;
}

.text-gray-500 {
    color: #6b7280;
}

.my-16 {
    margin-top: 4rem;
    margin-bottom: 4rem;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-8 {
    margin-top: 2rem;
}

.leading-relaxed {
    line-height: 1.625;
}

.bg-white {
    background-color: white;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.p-6 {
    padding: 1.5rem;
}

.shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.hover\\:shadow-lg:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.transition-shadow {
    transition: box-shadow 0.3s ease;
}

.duration-300 {
    transition-duration: 0.3s;
}

.ease-in-out {
    transition-timing-function: ease-in-out;
}

.text-blue-600 {
    color: #2563eb;
}

.hover\\:underline:hover {
    text-decoration: underline;
}
</style>
