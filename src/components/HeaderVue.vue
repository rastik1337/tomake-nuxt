<template>
    <div class="header">
        <h1 class="text-2xl sm:text-4xl">LOGO</h1>
        <div class="xs:grow-[0.5] sm:grow"></div>
        <div
            class="flex flex-col items-center text-sm sm:flex-row sm:space-x-4 sm:text-base"
        >
            <NuxtLink to="/" active-class="active-link-nuxt">STYLE</NuxtLink>
            <NuxtLink to="/second" active-class="active-link-nuxt"
                >NEW SEASON</NuxtLink
            >
            <NuxtLink to="/third" active-class="active-link-nuxt"
                >FASHION</NuxtLink
            >
        </div>
    </div>

    <div class="h-[2.5vh] w-[100%] bg-[#f0f0f0] sm:h-[5vh]"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
