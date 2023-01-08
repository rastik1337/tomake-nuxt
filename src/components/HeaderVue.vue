<script setup lang="ts">
import { useStore } from '@/stores/index';
const { header } = useStore();

const showModal = ref(false);
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
            @click="showModal = true"
        >
            {{ header.buttonText }}
        </button>
    </div>

    <div class="h-5 w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>

    <Teleport to="#modal-container">
        <div
            v-if="showModal"
            class="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/50"
        >
            <div class="flex flex-col text-center">
                <h1 class="m-5 text-3xl text-white">Login</h1>
                <div class="flex flex-col">
                    <input class="my-2" type="text" placeholder="Username" />
                    <input
                        class="my-2"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <div class="m-5 flex flex-row">
                    <button
                        class="mx-5 rounded-lg bg-green-600 px-6 py-3 uppercase text-black transition-all duration-300 ease-in-out sm:hover:bg-green-800"
                    >
                        SUBMIT
                    </button>
                    <button
                        class="rounded-lg bg-red-500 px-6 py-3 uppercase text-black transition-all duration-300 ease-in-out sm:hover:bg-red-700"
                        @click="showModal = false"
                    >
                        cancel
                    </button>
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
