<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true,
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
    <div class="m-10 flex h-[30rem] w-[75vw] flex-col bg-white sm:flex-row">
        <div class="h-1/2 sm:h-auto sm:w-1/2">
            <img
                :src="`_nuxt/assets/imgs/${image}`"
                alt=""
                class="h-full w-full object-cover object-[center_20%]"
            />
        </div>
        <div
            class="flex h-1/2 flex-col items-center justify-center p-[6%] sm:h-auto sm:w-1/2"
        >
            <p
                class="mx-2 my-5 text-center text-sm xs:text-base lg:text-xl xl:text-2xl"
            >
                {{ textMessage }}
            </p>
            <button
                class="mb-5 border-none bg-[#313131] py-2 px-8 text-xs text-white transition-all ease-in-out xs:text-sm sm:py-3 sm:px-16 lg:text-base xl:text-xl"
            >
                {{ textButton }}
            </button>
        </div>
    </div>
</template>
