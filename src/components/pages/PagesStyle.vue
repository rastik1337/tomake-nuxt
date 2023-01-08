<script setup lang="ts">
import { useStore } from '@/stores/index';

const { title, discountMessage, buySection } = useStore().stylePage;
</script>
<template>
    <div>
        <!-- FIRST SECTION -->
        <PagesStylePageTitle :image="title.image" :text="title.text" />
        <!-- SECOND SECTION -->
        <PagesStylePageDiscountMessage
            :text-heading="discountMessage.heading"
            :text-message="discountMessage.message"
            :text-button="discountMessage.buttonText"
        />
        <!-- THIRD SECTION -->
        <PagesStylePageBuySection
            :image="buySection.image"
            :text-heading="buySection.heading"
            :text-message="buySection.message"
            :text-button="buySection.buttonText"
        />
    </div>
</template>
