<template>
    <div class="header">
        <h1 class="sm:text-4xl text-2xl">LOGO</h1>
        <div class="sm:grow xs:grow-[0.5]"></div>
        <div
            class="flex flex-col sm:flex-row sm:space-x-4 items-center sm:text-base text-sm"
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

    <div class="bg-[#f0f0f0] sm:h-[5vh] h-[2.5vh] w-[100%]"></div>
</template>

<style scoped>
.active-link-nuxt {
    color: grey;
}
</style>
