/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: { logo: '#b22c2d' },
            fontFamily: {
                logo: ['Helvetica'],
            },
        },
    },
    plugins: [],
}
