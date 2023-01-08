/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            animation: {
                'bounce-once': 'bounce 1s ease-in-out 2.5',
            },
            screens: {
                xs: '320px',
            },
        },
    },
    plugins: [],
};
