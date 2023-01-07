/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            animation: {
                'bounce-once': 'bounce 1s ease-in-out 1.5',
                'spin-once': 'spin 0.5s ease-in-out 1',
            },
            screens: {
                xs: '320px',
            },
            fontFamily: {
                custom: ['"Josefin Sans""', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
