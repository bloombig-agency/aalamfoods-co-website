/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-primary': '#66cc6b', // Vibrant green theme
                'brand-secondary': '#2b2b2b',
                'brand-light': '#f0f7ef',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            }
        },
    },
    plugins: [],
}
