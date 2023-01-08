<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
        default: 'untitled',
    },
});
</script>
<template>
    <div
        :style="{
            backgroundImage: `url('_nuxt/assets/imgs/${image}')`,
        }"
        class="flex items-center justify-center bg-cover bg-[position:center_80%] bg-no-repeat py-[30%] grayscale transition-all ease-in-out 2xl:py-[20%]"
    >
        <h1
            class="select-none text-3xl font-bold uppercase tracking-widest text-white transition-all ease-in-out xs:text-6xl sm:text-9xl lg:text-[13rem]"
        >
            {{ text }}
        </h1>
    </div>
</template>
