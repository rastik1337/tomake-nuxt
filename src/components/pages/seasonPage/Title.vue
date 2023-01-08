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
            class="flex w-1/4 flex-col items-end justify-center bg-[#fd9903] xs:w-1/3"
        >
            <div
                class="relative left-[1.3rem] xs:left-[2.5rem] sm:left-[4rem] md:left-[5rem] lg:left-[6rem] xl:left-[7.9rem] 2xl:left-[10.5rem]"
            >
                <h1
                    class="-mb-3 text-base font-bold uppercase tracking-wide text-white xs:-mb-2 xs:text-3xl sm:-mb-1 sm:text-5xl md:mb-0 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                >
                    <template v-for="word in textHeading.split(' ')">
                        {{ word }}
                        <br
                            v-if="word !== textHeading.split(' ').pop()"
                            :key="word"
                        />
                    </template>
                </h1>
                <button
                    class="border-none bg-[#313131] py-[0.15rem] px-3 text-[0.3rem] text-white xs:py-[0.22rem] xs:px-[1.59rem] xs:text-[0.5rem] sm:py-[0.38rem] sm:px-[3.1rem] sm:text-[0.6rem] md:py-[0.38rem] md:px-[3.7rem] md:text-[0.8rem] lg:py-[0.45rem] lg:px-[4.3rem] lg:text-[1rem] xl:py-[0.5rem] xl:px-[6.4rem] xl:text-lg 2xl:py-[0.9rem] 2xl:px-[9.15rem] 2xl:text-xl"
                >
                    {{ textButton }}
                </button>
            </div>
        </div>

        <img
            :src="`_nuxt/assets/imgs/${image}`"
            class="w-3/4 object-cover xs:w-2/3"
        />
    </div>
</template>
