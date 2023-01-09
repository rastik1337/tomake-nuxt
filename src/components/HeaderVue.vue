<script setup lang="ts">
import { useStore } from '@/stores/index';
const { header, user } = useStore();

const showModal = ref(false);

const toggleModal = () => {
    showModal.value = !showModal.value;
    document.body.style.overflow = showModal.value ? 'hidden' : 'auto';
};
</script>
<template>
    <div
        class="m-5 flex h-48 flex-col items-center justify-between bg-white text-black transition-all ease-in-out xs:h-32 xs:flex-row"
    >
        <NuxtLink to="/" class="flex flex-[2] justify-self-center xs:flex-[1]">
            <img
                :src="`${header.logoPath}`"
                alt="logo"
                class="mx-auto h-16 animate-bounce-once transition-all duration-300 ease-in-out xs:h-auto"
            />
        </NuxtLink>
        <div
            class="flex flex-[4] flex-col items-center justify-evenly text-sm sm:flex-row sm:space-x-5 sm:text-base"
        >
            <NuxtLink
                v-for="link in header.links"
                :key="link.id"
                :to="link.path"
                active-class="active-link-nuxt"
                class="rounded-full sm:duration-150 sm:hover:bg-cyan-500 sm:hover:p-1 sm:hover:px-3 sm:hover:text-xl sm:hover:tracking-widest sm:hover:!text-black"
                >{{ link.text }}</NuxtLink
            >
        </div>
        <button
            class="flex-[0.5] rounded-xl bg-green-700 p-3 font-mono tracking-tight text-white duration-500 ease-in-out sm:hover:flex-[1] sm:hover:bg-green-900 sm:hover:tracking-widest"
            @click="toggleModal"
        >
            {{ header.buttonText }}
        </button>
    </div>

    <div class="h-5 w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>

    <Teleport v-if="showModal" to="#modal-container">
        <div
            class="fixed inset-0 z-[999] flex items-center justify-center bg-black/75"
        >
            <div
                class="relative m-4 flex w-full max-w-lg items-center justify-center rounded-3xl bg-white/90 shadow-lg"
            >
                <div class="flex flex-col items-center justify-center p-4">
                    <h1 class="text-center text-2xl font-bold">
                        Welcome back, <br />
                        <span class="text-green-600">{{ user.username }}</span
                        >!
                    </h1>
                    <input
                        type="text"
                        class="mt-4 rounded-lg border-2 border-black bg-gray-200 p-2 placeholder:text-black/70"
                        :placeholder="header.loginModal.placeholderUsername"
                    />
                    <input
                        type="password"
                        class="mt-4 rounded-lg border-2 border-black bg-gray-200 p-2 placeholder:text-black/70"
                        :placeholder="header.loginModal.placeholderPassword"
                    />
                    <div class="flex flex-row space-x-5">
                        <button
                            class="mt-4 rounded-lg bg-green-700 px-4 py-2 text-sm uppercase text-white"
                        >
                            login
                        </button>
                        <button
                            class="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm uppercase text-white"
                            @click="toggleModal"
                        >
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>

    <div id="modal-container"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
