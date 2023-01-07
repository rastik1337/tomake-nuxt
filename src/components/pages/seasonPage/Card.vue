<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    textHeading: {
        type: String,
        required: true,
    },
    textMessage: {
        type: String,
        required: true,
    },
    textButton: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="mx-10 my-16 flex flex-col sm:mx-5 xl:mx-10 2xl:mx-20">
        <img
            :src="`_nuxt/assets/imgs/${image}`"
            class="object-cover transition-all ease-in-out sm:h-[30vw]"
        />
        <h1
            class="my-12 text-center text-2xl font-bold text-gray-800 transition-all ease-in-out sm:text-3xl"
        >
            {{ textHeading }}
        </h1>
        <p
            class="mx-5 mb-8 text-center text-sm transition-all ease-in-out xs:text-sm sm:text-base"
        >
            {{ textMessage }}
        </p>
        <button
            class="mx-auto border-none bg-[#313131] py-3 px-12 text-[0.5rem] text-white transition-all ease-in-out xs:text-xs sm:text-sm"
        >
            {{ textButton }}
        </button>
    </div>
</template>
