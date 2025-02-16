<script setup>
import { ref } from 'vue';

definePageMeta({
    layout: "landing",
    title: "Our Healthcare AI Projects - Orynx",
    meta: [
        { hid: 'description', name: 'description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'og:title', property: 'og:title', content: 'Our Healthcare AI Projects - Orynx' },
        { hid: 'og:description', property: 'og:description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'og:image', property: 'og:image', content: 'https://orynx.co.uk/path/to/logo.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk/projects' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Our Healthcare AI Projects - Orynx' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Discover how we\'re revolutionizing healthcare through innovative AI and ML solutions.' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://orynx.co.uk/path/to/logo.png' },
    ],
    script: [
        {
            type: 'application/ld+json',
            json: {
                '@context': 'https://schema.org',
                '@type': 'ItemList',
                name: 'Orynx Healthcare AI Projects',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        url: 'https://orynx.co.uk/projects/ai-foot-drop-calculation',
                        name: 'AI-Assisted Foot Drop Calculation',
                        description: 'Developed at Queen Margaret University, this innovative research project leverages AI and machine learning to revolutionize the management of foot drop, enhancing shared decisionmaking and patient-centered care.'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        url: 'https://orynx.co.uk/projects/healthcare-learning-simulation',
                        name: 'Healthcare Learning Simulation APP',
                        description: 'A groundbreaking advancement in medical education, leveraging AI and augmented reality to transform how healthcare professionals learn and practice.'
                    }
                ]
            }
        }
    ]
});

const categories = ref(['All', 'AI/ML', 'Healthcare', 'Infrastructure', 'Cloud Solutions', 'Education']);
const selectedCategory = ref('All');

const projects = ref([
    {
        id: 1,
        category: 'AI/ML',
        title: 'AI-Assisted Foot Drop Calculation',
        description: 'Developed at Queen Margaret University, this innovative research project leverages AI and machine learning to revolutionize the management of foot drop, enhancing shared decisionmaking and patient-centered care.',
        features: [
            {
                title: 'Machine learning for accurate gait analysis',
                description: 'Advanced ML algorithms analyze gait patterns to provide precise biomechanical measurements.'
            },
            {
                title: 'AI-driven decision support for clinicians',
                description: 'Intelligent system assists healthcare providers in making informed treatment decisions.'
            },
            {
                title: 'User-friendly interface using common smart devices',
                description: 'Utilizes video from smart devices to analyze gait biomechanics.'
            },
            {
                title: 'Validated against high-end research equipment',
                description: 'Validated against the industry-leading VICON system for gold standard accuracy.'
            }
        ]
    },
    {
        id: 2,
        category: 'Education',
        title: 'Healthcare Learning Simulation APP',
        description: 'Our Learning Simulation APP represents a groundbreaking advancement in medical education, leveraging the power of artificial intelligence (AI) and augmented reality (AR) to transform how healthcare professionals learn and practice.',
        features: [
            {
                title: 'Virtual Patient Interaction',
                description: 'Medical students and healthcare professionals can engage with highly realistic virtual patients, simulating real-life clinical scenarios.'
            },
            {
                title: 'AI-Driven Scenarios',
                description: 'Advanced AI algorithms create dynamic, responsive patient cases that adapt to the learner\'s decisions and actions.'
            },
            {
                title: 'Augmented Reality Integration',
                description: 'AR technology overlays digital information onto the physical world, allowing for immersive, hands-on learning experiences.'
            },
            {
                title: 'Real-time Feedback',
                description: 'AI provides immediate, personalized feedback on learner performance, enhancing the educational experience.'
            }
        ]
    }
]);
</script>

<template>
    <div class="container mx-auto px-4 pt-24 pb-16">
        <div class="text-center">
            <h1 class="text-4xl font-bold text-black">Our Healthcare AI Projects</h1>
            <p class="mt-4 text-lg text-slate-500">Discover how we're revolutionizing healthcare through innovative AI and ML solutions</p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mt-8">
            <button v-for="category in categories" :key="category"
                    :class="['px-4 py-2 rounded-full transition-all duration-300',
                            selectedCategory === category 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-slate-100 hover:bg-slate-200 text-slate-700']"
                    @click="selectedCategory = category">
                {{ category }}
            </button>
        </div>

        <!-- Projects Grid -->
        <div class="mt-16 grid gap-8 md:grid-cols-2">
            <div v-for="project in projects.filter(p => selectedCategory === 'All' || p.category === selectedCategory)"
                 :key="project.id"
                 class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="p-6">
                    <span class="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                        {{ project.category }}
                    </span>
                    <h3 class="text-2xl font-bold text-slate-900">{{ project.title }}</h3>
                    <p class="mt-3 text-slate-500">{{ project.description }}</p>

                    <!-- Features Grid -->
                    <div class="mt-6 grid gap-4 sm:grid-cols-2">
                        <div v-for="(feature, index) in project.features" :key="index"
                             class="p-4 rounded-lg bg-slate-50">
                            <h4 class="font-semibold text-slate-900">{{ feature.title }}</h4>
                            <p class="mt-2 text-sm text-slate-500">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
