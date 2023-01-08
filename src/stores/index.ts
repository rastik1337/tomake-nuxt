import { defineStore } from 'pinia';
import data from '@/assets/data/websiteData.json';

export const useStore = defineStore('globalStore', {
    state: () => ({
        stylePage: data.stylePage,
        seasonPage: data.seasonPage,
        fashionPage: data.fashionPage,
        header: data.header,
        footer: data.footer,
    }),
});
