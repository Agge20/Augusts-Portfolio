/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require("@tailwindcss/typography"),
        require("tailwind-fluid-typography"),
        // ...
    ],
    content: ["./templates/**/*.{html,js,twig}", "./components/**/*.{html,twig}", "./content/**/*.{md,json}"],
    theme: {
        fluidTypography: {},
        colors: {
            transparent: "transparent",
            purple: {
                100: "#CFC2FB",
                200: "#CDAEFB",
            },
            blue: {
                100: "#82A9F9",
                "100-trans-25": "rgba(130, 169, 249, 0.25)",
            },
            turquoise: {
                100: "#A4FCF4",
                "100-trans-25": "rgba(164, 252, 244, 0.25)",
            },
            dark: {
                100: "#181B1F",
                200: "#0F0F0F",
            },
            white: "#FFFFFF",
            "linkedin-blue": "#0077B5",
        },
        extend: {
            fontFamily: {
                "gs-regular": ["General-Sans-Regular"],
                "gs-medium": ["General-Sans-Medium"],
                "gs-semibold": ["General-Sans-Semibold"],
                "gs-bold": ["General-Sans-Bold"],
            },

            minWidth: {
                auto: "auto",
                px: "1px",
                0: "0",
                1: "0.25rem",
                2: "0.5rem",
                3: "0.75rem",
                4: "1rem",
                5: "1.25rem",
                6: "1.5rem",
                8: "2rem",
                10: "2.5rem",
                12: "3rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
                40: "10rem",
                48: "12rem",
                56: "14rem",
                64: "16rem",
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
                "1/4": "25%",
                "2/4": "50%",
                "3/4": "75%",
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "1/6": "16.666667%",
                "2/6": "33.333333%",
                "3/6": "50%",
                "4/6": "66.666667%",
                "5/6": "83.333333%",
                "1/12": "8.333333%",
                "2/12": "16.666667%",
                "3/12": "25%",
                "4/12": "33.333333%",
                "5/12": "41.666667%",
                "6/12": "50%",
                "7/12": "58.333333%",
                "8/12": "66.666667%",
                "9/12": "75%",
                "10/12": "83.333333%",
                "11/12": "91.666667%",
                full: "100%",
                screen: "100vw",
                xl: "36rem",
                "2xl": "42rem",
                "3xl": "48rem",
                "4xl": "56rem",
                "5xl": "64rem",
                "6xl": "72rem",
            },
            minHeight: {
                auto: "auto",
                2: "0.5rem",
                4: "1rem",
                6: "1.5rem",
                8: "2rem",
                10: "2.5rem",
                12: "3rem",
                16: "4rem",
                20: "5rem",
                24: "6rem",
                32: "8rem",
                40: "10rem",
                48: "12rem",
                56: "14rem",
                64: "16rem",
                72: "18rem",
                80: "20rem",
                88: "22rem",
                96: "24rem",
                "3/4-screen": "75vh",
                "1/2-screen": "50vh",
                "1/4-screen": "25vh",
                "1/5-screen": "20vh",
            },
            maxWidth: {
                "1/2": "50%",
                "1/3": "33.333333%",
                "2/3": "66.666667%",
            },
            opacity: {
                15: "0.15",
                10: "0.1",
            },
            scale: {
                102: "1.02",
            },
            animation: {
                "gradient-shine": "gradient-shine 2.5s linear infinite",
                "gradient-shine-and-scale": "gradient-shine-and-scale 6s linear infinite",
                "expand-in": "expand-in 1.5s ease-in-out",
                "fade-in": "fade-in 1.5s ease-in-out",
                "fade-out": "fade-out 1.5s ease-in-out",
                "slide-in-from-right": "slide-in-from-right 0.5s ease-in-out",
                "slide-in-from-left": "slide-in-from-left 0.5s ease-in-out",
                "slide-in-from-left-slow": "slide-in-from-left 1s ease-in-out",
                "scale-in": "scale-in 1s ease-in-out forwards",
                "card-text-slide-in": "card-text-slide-in 0.75s ease-in-out forwards",
                "card-title-slide-in": "card-title-slide-in 0.75s ease-in-out forwards",
                spin: "spin 1.5s linear infinite",
            },
            animationFill: {
                forwards: "forwards",
            },
            keyframes: {
                "gradient-shine": {
                    "0%": {
                        "background-size": "200% 200%",
                        "background-position": "200% center",
                    },
                    "100%": {
                        "background-size": "200% 200%",
                        "background-position": "0% center",
                    },
                },
                "gradient-shine-and-scale": {
                    "0%": {
                        "background-size": "200% 200%",
                        "background-position": "200% center",
                        transform: "scale(0.9)",
                    },
                    "50%": {
                        transform: "scale(1.02)",
                    },
                    "100%": {
                        "background-size": "200% 200%",
                        "background-position": "0% center",
                        transform: "scale(0.9)",
                    },
                },
                "expand-in": {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                "fade-in": {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                "fade-out": {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                "slide-in-from-right": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: 0,
                    },
                    "75%": {
                        transform: "translateX(50%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: 1,
                    },
                },
                "slide-in-from-left": {
                    "0%": {
                        transform: "translateX(-200%)",
                        opacity: 0,
                    },
                    "75%": {
                        transform: "translateX(-50%)",
                        opacity: 0,
                    },
                    "100%": {
                        transform: "translateX(0)",
                        opacity: 1,
                    },
                },
                "scale-in": {
                    "0%": {
                        transform: "scale(0)",
                    },
                    "100%": {
                        transform: "scale(1)",
                    },
                },
                spin: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
            },
            boxShadow: {
                "inset-white": "inset 0 0 2000px rgba(255, 255, 255, .5)",
            },
        },
    },
};