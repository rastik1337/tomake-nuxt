<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { useStore } from '@/stores/index';

const { footer } = useStore();
library.add(faFacebookF, faInstagram, faTwitter);
</script>
<template>
    <div
        class="m-[5vh] flex flex-col items-center justify-center text-center text-gray-800"
    >
        <h1 class="text-lg font-bold transition-all ease-in-out sm:text-xl">
            {{ footer.title }}
        </h1>
        <div
            class="my-5 flex flex-col space-y-2 transition-all ease-in-out xs:flex-row xs:space-x-5 xs:space-y-0"
        >
            <NuxtLink
                v-for="icon in footer.icons"
                :key="icon.id"
                :to="icon.link"
                class="rounded-3xl bg-[#f19a29] px-3 py-2 text-white transition-all duration-100 ease-linear sm:hover:rounded-lg"
            >
                <font-awesome-icon :icon="icon.name" :size="icon.iconSize" />
            </NuxtLink>
        </div>
        <p
            class="my-0 mx-[15vw] text-sm transition-all ease-in-out sm:text-base"
        >
            {{ footer.text }}
        </p>
    </div>
</template>
