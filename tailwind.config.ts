import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-color": "#B88E2F",
                "secondary-color": "#9F9F9F",
                "secondary-bg-color": "#F9F1E7",
                "border-color": "#D9D9D9",
                "text-grey": "#898989",
                FFF3E3: "#FFF3E3",
                "3A3A3A": "#3A3A3A",
                "(3A3A3A,.7)": "rgba(58,58,58,.7)",
                
                F4F5F7: "#F4F5F7",
                FCF8F3: "#FCF8F3",
                "(fffff,.7)": "rgba(255,255,255,.7)",
                616161: "#616161",

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
                full: "100%",
            },
            backgroundImage: {
                "hero-screen":
                    "url(/assets/images/hero-screen.jpg)",
                "page-header":
                    "url(/assets/images/page-main-heading-background.jpg)",
            },
            fontSize: {
                28: "1.75em",
                32: "2em",
                40: "2.5em",
                52: "3.25em",
            },
            transitionDuration: {
                600: "600ms",
                900: "900ms",
                1200: "1200ms",
            },
        },
    },
    plugins: [],
};
export default config;
