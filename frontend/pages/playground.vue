<!-- <template>
    <div class="playground-container">
        <h1 class="text-3xl font-bold text-center mt-8">Chat with LLM</h1>
        <div class="chat-container">
            <div class="chat-history" v-for="message in messages" :key="message.id">
                <div :class="{ 'user-message': message.sender === 'user', 'bot-message': message.sender === 'bot' }">
                    {{ message.text }}
                </div>
            </div>
        </div>
        <form @submit.prevent="sendMessage">
            <input type="text" v-model="userMessage" placeholder="Type your message here..." class="chat-input" />
            <button type="submit" class="chat-submit">Send</button>
        </form>
    </div>
</template>

<script>
import { sendToCohere } from '~/server/services/cohereService';

definePageMeta({
    layout: "landing",
});

export default {
    middleware: 'auth',
    data() {
        return {
            userMessage: '',
            messages: [],
            messageId: 0,
        };
    },
    created() { },
    methods: {
        async sendMessage() {
            if (this.userMessage.trim() === '') return;

            const userMessage = {
                id: this.messageId++,
                text: this.userMessage,
                sender: 'user'
            };
            this.messages.push(userMessage);
            this.userMessage = '';

            console.log('Sending message to backend:', userMessage.text);

            try {

                const botResponse = await sendToCohere(userMessage.text);
                console.log('Received response from Cohere:', botResponse);

                const botMessage = {
                    id: this.messageId++,
                    text: botResponse,
                    sender: 'bot'
                };
                this.messages.push(botMessage);
            } catch (error) {
                console.error('Error communicating with the backend:', error);
            }
        }
    }
}
</script>

<style scoped>
.playground-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.chat-container {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 1rem;
}

.chat-history {
    margin-bottom: 1rem;
}

.user-message,
.bot-message {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    margin: 0.5rem 0;
    display: inline-block;
    max-width: 80%;
}

.user-message {
    background-color: #d1e7dd;
    align-self: flex-end;
    margin-left: auto;
}

.bot-message {
    background-color: #f8d7da;
    align-self: flex-start;
    margin-right: auto;
}

.chat-input {
    width: calc(100% - 90px);
    padding: 0.5rem;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.chat-submit {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.chat-submit:hover {
    background-color: #0056b3;
}
</style> -->

<template>
    <div class="playground-container">
        <h1 class="text-3xl font-bold text-center mt-8">Coming soon!</h1>
        <!-- Add more content as needed -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '~/plugins/firebase';
import cookies from 'vue-cookies';

const isLoggedIn = ref(true);
const router = useRouter();

const logout = async () => {
    try {
        await signOut(auth);
        cookies.remove('auth');
        isLoggedIn.value = false;
        router.push('/login');
    } catch (err) {
        console.error('Logout Failed:', err);
    }
};

definePageMeta({
    layout: "landing",
    middleware: 'auth',
});
</script>

<style scoped>
.playground-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
}
</style>
