<script setup lang="ts">
const cards = [
    {
        id: 0,
        image: 'fashion-card-1.jpg',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy nibh',
        textButton: 'BUY NOW',
    },
    {
        id: 1,
        image: 'fashion-card-2.jpg',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy nibh',
        textButton: 'BUY NOW',
    },
    {
        id: 2,
        image: 'fashion-card-3.jpg',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy nibh',
        textButton: 'BUY NOW',
    },
];
</script>
<template>
    <div>
        <!-- FIRST SECTION -->
        <PagesFashionPageTitle
            image="fashion.jpg"
            text-heading="fashion"
            text-button="SHOP NOW"
        />
        <!-- SECOND SECTION -->
        <div class="flex flex-col items-center justify-center bg-[#f0f0f0]">
            <PagesFashionPageCard
                v-for="card in cards"
                :key="card.id"
                :image="card.image"
                :text-message="card.textMessage"
                :text-button="card.textButton"
                class="reversed"
            />
        </div>
    </div>
</template>
