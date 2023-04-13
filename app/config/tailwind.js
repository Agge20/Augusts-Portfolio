/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./templates/**/*.{html,js,twig}", "./components/**/*.{html,twig}"],
    theme: {
        extend: {
            fontFamily: {
                "gs-regular": ["General-Sans-Regular"],
                "gs-medium": ["General-Sans-Medium"],
                "gs-semibold": ["General-Sans-Semibold"],
                "gs-bold": ["General-Sans-Bold"],
            },
            colors: {
                "ap-green": {
                    100: "#37F286",
                    200: "#23CE6B",
                    300: "#1E944F",
                    400: "#187A42",
                },
                "ap-dark": {
                    100: "#181B1F",
                    200: "#0F0F0F",
                },
                "ap-white": {
                    100: "#FFFFFF",
                },
                "linkedin-blue": "#0077B5",
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
            },
            minHeight: {
                "3/4-screen": "75vh",
            },
            maxWidth: {
                "1/2": "50%",
            },
            animation: {
                "gradient-shine": "gradient-shine 2.5s linear infinite",
                "expand-in": "expand-in 1.5s ease-in-out",
                "fade-in": "fade-in 1.5s ease-in-out",
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
            },
        },
    },
};
