<script setup lang="ts">
import { useStore } from '@/stores/index';

const { cards, title } = useStore().seasonPage;
</script>
<template>
    <div class="transition-all ease-in-out">
        <!-- FIRST SECTION -->
        <PagesSeasonPageTitle
            :image="title.image"
            :text-heading="title.heading"
            :text-button="title.buttonText"
        />
        <!-- SECOND SECTION -->
        <div
            class="flex flex-wrap items-center justify-center bg-[#f0f0f0] sm:flex-nowrap"
        >
            <PagesSeasonPageCard
                v-for="card in cards"
                :key="card.id"
                :text-heading="card.heading"
                :text-message="card.message"
                :text-button="card.buttonText"
                :image="card.image"
            />
        </div>
    </div>
</template>
