<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { ref } from 'vue';

library.add(faFacebookF, faInstagram, faTwitter);

let notUsedVar;

const path = ref('');
onMounted(() => {
    path.value = window.location.pathname;
});
</script>
<template>
    <div class="footer">
        <h1 class="sm:text-xl text-lg font-bold">FOLLOW ALONG WITH US</h1>
        <div class="socials">
            <NuxtLink :to="path">
                <font-awesome-icon icon="fa-brands fa-facebook-f" size="2xl" />
            </NuxtLink>
            <NuxtLink :to="path">
                <font-awesome-icon icon="fa-brands fa-instagram" size="2xl" />
            </NuxtLink>
            <NuxtLink :to="path">
                <font-awesome-icon icon="fa-brands fa-twitter" size="2xl" />
            </NuxtLink>
        </div>
        <p class="my-0 mx-[15vw] sm:text-base text-sm">
            Lorem ipsum dolor ametconsectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore
        </p>
    </div>
</template>
