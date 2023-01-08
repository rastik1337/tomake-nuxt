<script setup lang="ts">
const showModal = ref(false);
const links = ref([
    {
        id: 0,
        text: 'STYLE',
        path: '/',
    },
    {
        id: 1,
        text: 'NEW SEASON',
        path: '/season',
    },
    {
        id: 2,
        text: 'FASHION',
        path: '/fashion',
    },
]);
</script>
<template>
    <div
        class="m-5 flex h-40 flex-col items-center justify-between bg-white text-black transition-all ease-in-out xs:flex-row sm:h-32"
    >
        <NuxtLink to="/" class="flex flex-[0.5] justify-self-center">
            <h1
                class="mx-auto animate-bounce-once text-2xl tracking-tighter duration-300 ease-in-out sm:text-4xl sm:hover:tracking-widest"
            >
                LOGO
            </h1>
        </NuxtLink>
        <div
            class="flex flex-[4] flex-col items-center justify-center text-sm sm:flex-row sm:space-x-5 sm:text-base"
        >
            <NuxtLink
                v-for="link in links"
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
            LOGIN
        </button>
    </div>

    <div class="h-5 w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
