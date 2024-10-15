/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "brand-color": "#B88E2F",
                "FFF3E3": '#FFF3E3',
                "3A3A3A": '#3A3A3A'
            },
            container: {
                center: true,
                screens: {
                    "2xl": "1286px",
                },
            },
            spacing: {
                30: " 1.875rem ",
                37.5: " 2.344rem ",
                45: " 2.813rem ",
                50: " 3.125rem ",
                60: " 3.75rem ",
                72: " 4.5rem ",
                75: " 4.688rem ",
                
            },
            backgroundImage: {
                'hero-screen': 'url(https://raw.githubusercontent.com/Kalynovskyi/furniro-store/refs/heads/master/src/assets/images/hero-screen.jpg)'
            },
            fontSize: {
                32: '2em',
                52: '3.25em',
            }
        },
    },
    plugins: [],
};
