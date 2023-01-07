// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    srcDir: 'src/',
    css: ['@fortawesome/fontawesome-svg-core/styles.css', '~/assets/main.css'],
    build: {
        transpile: ['@fortawesome/vue-fontawesome'],
    },
    typescript: {
        shim: false,
    },
    tailwindcss: {
        cssPath: '~/assets/main.css',
        configPath: 'tailwind.config.js',
    },
});
