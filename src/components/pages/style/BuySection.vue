<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="flex">
        <img
            :src="`_nuxt/assets/imgs/${image}.jpg`"
            class="relative max-h-fit w-1/2 object-cover grayscale-[50%] xs:w-2/3 xl:w-[70%]"
        />
        <div
            class="flex max-h-fit w-1/2 flex-col items-center justify-center bg-[#fd9903] xs:w-1/3 xl:w-[30%]"
        >
            <h1
                class="mt-10 text-sm font-bold uppercase tracking-wide text-white xs:text-base sm:text-3xl md:text-4xl"
            >
                new style
            </h1>
            <p
                class="mx-4 my-5 text-center text-xs text-gray-800 sm:mx-10 sm:text-base lg:mx-24"
            >
                Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy
                nibh
            </p>
            <button
                class="mb-10 border-none bg-[#313131] px-5 py-3 text-[0.6rem] text-white sm:px-12 sm:text-xl md:text-2xl lg:px-14 xl:px-16"
            >
                BUY NOW
            </button>
        </div>
    </div>
</template>
