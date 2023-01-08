<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
    },
    textHeading: {
        type: String,
        required: false,
        default: 'untitled',
    },
    textButton: {
        type: String,
        required: false,
        default: 'BUTTON',
    },
});
</script>
<template>
    <div class="flex">
        <div
            class="flex w-2/3 flex-col items-center justify-center bg-[#313131]"
        >
            <div>
                <h1
                    class="text-2xl font-bold uppercase tracking-wide text-white transition-all ease-in-out xs:text-4xl sm:text-6xl lg:text-8xl 2xl:text-9xl"
                >
                    {{ textHeading }}
                </h1>
                <button
                    class="bg-[#f19a29] px-3 py-[0.18rem] text-[0.6rem] text-white transition-all ease-in-out xs:px-7 xs:py-1 xs:text-[0.7rem] sm:px-14 sm:py-2 sm:text-base lg:px-28 lg:py-3 lg:text-lg 2xl:py-4 2xl:px-36 2xl:text-2xl"
                >
                    {{ textButton }}
                </button>
            </div>
        </div>
        <img :src="`_nuxt/assets/imgs/${image}`" class="w-1/3" />
    </div>
</template>
