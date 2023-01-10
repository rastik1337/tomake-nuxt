<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: false,
        default: 'card-1.jpg',
    },
    textHeading: {
        type: String,
        required: false,
        default: 'Card Title',
    },
    textMessage: {
        type: String,
        required: false,
        default: 'Some card text...',
    },
    textButton: {
        type: String,
        required: false,
        default: 'BUTTON',
    },
});
</script>
<template>
    <div class="m-10 flex w-96 flex-col">
        <img :src="`_nuxt/assets/imgs/${image}`" class="h-auto max-w-full" />
        <h1
            class="my-12 text-center text-2xl font-bold text-gray-800 transition-all ease-in-out sm:text-3xl"
        >
            {{ textHeading }}
        </h1>
        <p
            class="mb-8 text-center text-sm transition-all ease-in-out xs:text-sm sm:text-base"
        >
            {{ textMessage }}
        </p>
        <button
            class="mx-auto border-none bg-[#313131] py-3 px-12 text-[0.5rem] uppercase text-white transition-all ease-in-out xs:text-xs sm:text-sm"
        >
            {{ textButton }}
        </button>
    </div>
</template>
