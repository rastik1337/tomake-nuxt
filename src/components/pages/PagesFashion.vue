<script setup lang="ts">
import { useStore } from '@/stores/index';

const { cards, title } = useStore().fashionPage;
</script>
<template>
    <div>
        <!-- FIRST SECTION -->
        <PagesFashionPageTitle
            :image="title.image"
            :text-heading="title.heading"
            :text-button="title.buttonText"
        />
        <!-- SECOND SECTION -->
        <div class="flex flex-col items-center justify-center bg-[#f0f0f0]">
            <PagesFashionPageCard
                v-for="card in cards"
                :key="card.id"
                :image="card.image"
                :text-message="card.message"
                :text-button="card.buttonText"
                class="reversed"
            />
        </div>
    </div>
</template>
