<script setup lang="ts">
defineProps({
    image: {
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
    <div class="m-5 flex bg-white">
        <div
            :style="{
                backgroundImage: `url('_nuxt/assets/imgs/${image}')`,
            }"
            class="w-1/2 bg-cover bg-[position:center_top_25%] bg-no-repeat"
        />
        <div class="flex w-1/2 flex-col items-center justify-center p-[6%]">
            <p
                class="mx-2 my-5 text-center text-sm xs:text-base lg:text-xl xl:text-2xl"
            >
                {{ textMessage }}
            </p>
            <button
                class="mb-5 border-none bg-[#313131] py-2 px-8 text-xs text-white xs:text-sm sm:py-3 sm:px-16 lg:text-base xl:text-xl"
            >
                {{ textButton }}
            </button>
        </div>
    </div>
</template>
