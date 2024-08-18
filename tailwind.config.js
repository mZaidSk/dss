/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                ".navbar-title-text": {
                    background:
                        "linear-gradient(90deg, #7d6505, #f1c40f)" /* Adjust gradient as needed */,
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
            });
        },
    ],
};
