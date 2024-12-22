/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'serif']
            },
            colors: {
                'brand': '#B88E2F',
                'bgPrimary': '#FFF3E3',
                'txtPrimary': '#333333',
                'txtSecondary': '#666666'
            }
        },

        container: {
            center: true,
            padding: '1rem'
        }
    },
    plugins: [],
}
