// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    srcDir: 'src/',
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        '~/assets/main.css'
    ],
    build: {
        transpile: ['@fortawesome/vue-fontawesome']
    }
})
