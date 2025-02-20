/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
    plugins: {
        '@tailwindcss/postcss': {
            content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
            theme: {
                extend: {},
            },
            plugins: [typography],
        },


    },
}