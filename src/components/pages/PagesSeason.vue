<script setup lang="ts">
import { useStore } from '@/stores/index';
const { cards, title } = useStore().seasonPage;

type CardsQuery = {
    cards: {
        id: number;
        price: number;
        button: string;
        description: string;
    }[];
};

const query = gql`
    query getCards {
        cards {
            id
            price
            button
            description
        }
    }
`;
const { data } = useAsyncQuery<CardsQuery>(query);
const fetchedCards = data.value?.cards;
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
        <div class="flex flex-wrap items-center justify-center bg-[#f0f0f0]">
            <PagesSeasonPageCard
                v-for="card in cards"
                :key="card.id"
                :text-heading="card.heading"
                :text-message="card.message"
                :text-button="card.buttonText"
                :image="card.image"
            />
            <!-- CARDS FETCHED FROM EXTERNAL API -->
            <PagesSeasonPageCard
                v-for="card in fetchedCards"
                :key="card.id"
                :text-heading="`$${card.price.toString()}`"
                :text-message="card.description"
                :text-button="card.button"
            />
        </div>
    </div>
</template>
