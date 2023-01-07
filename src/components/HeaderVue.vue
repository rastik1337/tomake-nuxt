<script setup lang="ts">
const showModal = ref(false);
</script>
<template>
    <div class="header">
        <NuxtLink to="/">
            <h1 class="text-2xl sm:text-4xl">LOGO</h1>
        </NuxtLink>
        <div class="grow-0 xs:grow-[0.5] sm:grow"></div>
        <div
            class="flex flex-col items-center text-sm sm:flex-row sm:space-x-4 sm:text-base"
        >
            <NuxtLink to="/" active-class="active-link-nuxt">STYLE</NuxtLink>
            <NuxtLink to="/season" active-class="active-link-nuxt"
                >NEW SEASON</NuxtLink
            >
            <NuxtLink to="/fashion" active-class="active-link-nuxt"
                >FASHION</NuxtLink
            >
        </div>
        <button
            class="ml-10 rounded-full bg-blue-500 p-3 font-mono text-white transition-all duration-75 ease-in-out hover:bg-blue-800"
            @click="showModal = true"
        >
            SIGN IN
        </button>
    </div>

    <div class="h-[2.5vh] w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
