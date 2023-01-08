<script setup lang="ts">
const cards = [
    {
        id: 0,
        image: 'card-1.jpg',
        textHeading: '$50',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing diam nonummy nibh',
        textButton: 'BUY NOW',
    },
    {
        id: 1,
        image: 'card-2.jpg',
        textHeading: '$50',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing diam nonummy nibh',
        textButton: 'BUY NOW',
    },
    {
        id: 2,
        image: 'card-3.jpg',
        textHeading: '$50',
        textMessage:
            'Lorem ipsum dolor consectetuer adipiscing diam nonummy nibh',
        textButton: 'BUY NOW',
    },
];
</script>
<template>
    <div class="transition-all ease-in-out">
        <!-- FIRST SECTION -->
        <PagesSeasonPageTitle
            image="new-season.jpg"
            text-heading="new season"
            text-button="SHOP NOW"
        />
        <!-- SECOND SECTION -->
        <div
            class="flex flex-wrap items-center justify-center bg-[#f0f0f0] sm:flex-nowrap"
        >
            <PagesSeasonPageCard
                v-for="card in cards"
                :key="card.id"
                :text-heading="card.textHeading"
                :text-message="card.textMessage"
                :text-button="card.textButton"
                :image="card.image"
            />
        </div>
    </div>
</template>
