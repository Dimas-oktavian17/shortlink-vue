/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            body: ['Poppins', 'sans-serif'],
        },
        extend: {
            colors: {
                // COlOR
                // Primary
                primaryCyan: '#2acfcf',
                primaryDarkViolet: '#3b3054',
                // Secondary
                secondaryRed: '#f46262',
                // Neutral
                netralGray: '#bfbfbf',
                netralGrayishViolet: '#9e9aa7',
                netralVeryDarkBlue: '#35323e',
                netralVeryDarkViolet: '#232127',
            },
        },
    },
    plugins: [],
}
