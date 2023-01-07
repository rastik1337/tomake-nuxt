<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    textHeading: {
        type: String,
        required: true,
        default: 'Heading',
    },
    textMessage: {
        type: String,
        required: true,
        default: 'Content of the message for this',
    },
    textButton: {
        type: String,
        required: true,
        default: 'BUTTON',
    },
});
</script>
<template>
    <div class="flex transition-all ease-in-out xl:h-[35vw]">
        <img
            :src="`_nuxt/assets/imgs/${image}`"
            class="relative max-h-fit w-1/2 object-cover grayscale-[50%] xs:w-2/3"
        />
        <div
            class="flex max-h-fit w-1/2 flex-col items-center justify-center bg-[#fd9903] transition-all ease-in-out xs:w-1/3"
        >
            <h1
                class="mt-10 text-sm font-bold uppercase tracking-wide text-white transition-all ease-in-out xs:text-base sm:text-3xl md:text-4xl"
            >
                {{ textHeading }}
            </h1>
            <p
                class="mx-4 my-5 text-center text-xs text-gray-800 transition-all ease-in-out sm:mx-10 sm:text-base lg:mx-24"
            >
                {{ textMessage }}
            </p>
            <button
                class="mb-10 border-none bg-[#313131] px-5 py-3 text-[0.6rem] text-white transition-all ease-in-out sm:px-12 sm:text-xl md:text-2xl lg:px-14 xl:px-16"
            >
                {{ textButton }}
            </button>
        </div>
    </div>
</template>
