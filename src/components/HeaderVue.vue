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
        class="my-2 flex h-[10vh] flex-col items-center justify-center bg-white py-10 px-[10%] text-black transition-all ease-in-out xs:flex-row sm:my-10 sm:flex-row sm:items-baseline"
    >
        <NuxtLink to="/">
            <h1
                class="md:hover:-px-3 animate-bounce-once rounded-full text-2xl tracking-tighter duration-300 ease-in-out sm:text-4xl sm:hover:tracking-widest md:hover:bg-cyan-500 md:hover:p-3"
            >
                LOGO
            </h1>
        </NuxtLink>
        <div class="grow-0 xs:grow-[0.5] sm:grow"></div>
        <div
            class="flex flex-col items-center text-sm sm:flex-row sm:space-x-4 sm:text-base"
        >
            <NuxtLink
                v-for="link in links"
                :key="link.id"
                :to="link.path"
                active-class="active-link-nuxt"
                class="rounded-full sm:duration-150 sm:hover:text-xl sm:hover:tracking-widest md:hover:bg-cyan-500 md:hover:p-1 md:hover:px-3 md:hover:!text-black"
                >{{ link.text }}</NuxtLink
            >
        </div>
        <button
            class="ml-10 animate-none animate-spin-once rounded-xl bg-green-700 p-3 font-mono text-white duration-500 ease-in-out sm:hover:bg-green-900 sm:hover:px-8 sm:hover:tracking-widest"
            @click="showModal = true"
        >
            LOGIN
        </button>
    </div>

    <div class="h-[2.5vh] w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
