<script setup lang="ts">
defineProps({
    textHeading: {
        type: String,
        required: false,
        default: 'DISCOUNT HEADING',
    },
    textMessage: {
        type: String,
        required: false,
        default: 'Default content of the discount message.',
    },
    textButton: {
        type: String,
        required: false,
        default: 'DISCOUNT REDIRECT',
    },
});
</script>
<template>
    <div class="flex flex-col items-center justify-center bg-[#f0f0f0]">
        <h1 class="mt-10 text-2xl font-bold text-gray-800 sm:text-4xl">
            {{ textHeading }}
        </h1>
        <p class="mx-[15vw] my-5 text-center text-sm sm:text-base">
            {{ textMessage }}
        </p>
        <button
            class="mb-10 h-10 w-32 select-none border-none bg-[#f19a29] py-1 px-4 text-xs text-white sm:h-14 sm:w-64 sm:py-2 sm:px-8 sm:text-lg"
        >
            {{ textButton }}
        </button>
    </div>
</template>
