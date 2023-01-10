// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/apollo'],
    srcDir: 'src/',
    css: ['@fortawesome/fontawesome-svg-core/styles.css', '@/assets/main.css'],
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
    app: {
        head: {
            title: 'TOMAKE NUXT3',
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint:
                    'https://trainee-server-production.up.railway.app/',
            },
        },
    },
});
