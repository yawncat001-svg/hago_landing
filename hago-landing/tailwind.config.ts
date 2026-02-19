import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "#39ff14", // Neon Green
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#ff4500", // Electric Orange (alternate accent)
                    foreground: "#ffffff",
                },
                dark: {
                    100: "#1a1a1a",
                    200: "#121212",
                    300: "#0a0a0a",
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-glow": "radial-gradient(circle at center, rgba(57, 255, 20, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
            },
        },
    },
    plugins: [],
};
export default config;
