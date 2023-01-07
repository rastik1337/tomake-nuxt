<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ref } from 'vue';

library.add(faFacebookF, faInstagram, faTwitter);

const path = ref('');
onMounted(() => {
    path.value = window.location.pathname;
});

const icons = [
    {
        id: 0,
        name: 'fa-brands fa-facebook-f',
        link: '#',
    },
    {
        id: 1,
        name: 'fa-brands fa-instagram',
        link: '#',
    },
    {
        id: 2,
        name: 'fa-brands fa-twitter',
        link: '#',
    },
];
</script>
<template>
    <div class="footer">
        <h1 class="text-lg font-bold transition-all ease-in-out sm:text-xl">
            FOLLOW ALONG WITH US
        </h1>
        <div class="socials transition-all ease-in-out">
            <NuxtLink v-for="icon in icons" :key="icon.id" :to="icon.link">
                <font-awesome-icon :icon="icon.name" size="2xl" />
            </NuxtLink>
        </div>
        <p
            class="my-0 mx-[15vw] text-sm transition-all ease-in-out sm:text-base"
        >
            Lorem ipsum dolor ametconsectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore
        </p>
    </div>
</template>
