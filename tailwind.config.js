/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            xxl: "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            xl: "1.25rem",
            xxl: "2rem",
        },
        fontFamily: {
            logoFont: ["Omegle", "sans-serif"],
            sloganFontRegular: ["RobotoMonoRegular", "monospace"],
            sloganFontThin: ["RobotoMonoThin", "monospace"],
            sloganFontBold: ["RobotoMonoBold", "monospace"],
        },

        extend: {
            colors: {
                primary: "#FF4252",
                primaryVariant: "#FF6F51",
                secondary: "#14375A",
                secondaryVariant: "#5C7792",
                tertiary: "#6BBEB9",
                coolBlack: "#3A3C3D",
            },
            borderRadius: {
                default: "4px",
                large: "12px",
                xl_large: "32px"

            },
            padding: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
            },
            spacing: {
                sm: "8px",
                md: "16px",
                lg: "24px",
                xl: "48px",
            },
            maxWidth: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%",
                "1/3": "30%",


            },
            maxHeight: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%",
                "1/6": "10%",
            },
            minWidth: {
                1: "100%",
                "3/4": "75%",
                "1/2": "50%",
                "1/4": "25%",
                "1/5": "20%",
                "1/3": "33%",
            },
        },
    },
    plugins: [],
};

//*  GRADIENT

// Tertiary gradient = bg-gradient-to-r from-[#6BBEB9] to-[#14375A]
// Secondary gradient = bg-gradient-to-r from-[#6F88A1] to-[#14375A]
// Try one = bg-gradient-to-r from-[#45BCB7] via-[#064566] via-[#1C373F] via-[#733C47] to-[#E73F4E]
// Try two = bg-gradient-to-r from-[#FF4353] via-[#803D57] to-[#14375A]
// Try three = bg-gradient-to-r from-[#88c9cd] via-[#7ba3b4] via-[#8c9ca0] via-[#b79ca2] to-[#dc9ba4]
