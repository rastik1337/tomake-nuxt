<script setup lang="ts">
import { useStore } from '@/stores/index';
import useGetCards from '@/composables/queries/useGetCards';

const { cards, title } = useStore().fashionPage;

const fetchedCards = await useGetCards();
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
            <!-- FETCHED CARDS -->
            <PagesFashionPageCard
                v-for="card in fetchedCards"
                :key="card.id"
                :text-message="card.description"
                :text-button="card.button"
                class="reversed"
            />
        </div>
    </div>
</template>
