<script setup lang="ts">
defineProps({
    imageSource: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div
        :class="`bg-[url:url('${imageSource}')]`"
        class="flex items-center justify-center bg-cover bg-[position:center_80%] bg-no-repeat py-[30%] grayscale 2xl:py-[20%]"
    >
        <h1
            class="select-none text-3xl font-bold uppercase tracking-widest text-white xs:text-6xl sm:text-9xl lg:text-[13rem]"
        >
            {{ text }}
        </h1>
    </div>
</template>
