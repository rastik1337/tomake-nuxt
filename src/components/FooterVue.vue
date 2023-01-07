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
</script>
<template>
    <div class="footer">
        <h1 class="text-lg font-bold sm:text-xl">FOLLOW ALONG WITH US</h1>
        <div class="socials">
            <NuxtLink to="#">
                <font-awesome-icon icon="fa-brands fa-facebook-f" size="2xl" />
            </NuxtLink>
            <NuxtLink to="#">
                <font-awesome-icon icon="fa-brands fa-instagram" size="2xl" />
            </NuxtLink>
            <NuxtLink to="#">
                <font-awesome-icon icon="fa-brands fa-twitter" size="2xl" />
            </NuxtLink>
        </div>
        <p class="my-0 mx-[15vw] text-sm sm:text-base">
            Lorem ipsum dolor ametconsectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore
        </p>
    </div>
</template>
