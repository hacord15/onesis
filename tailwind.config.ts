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
        primary: {
          DEFAULT: "#C81020",
          25: "#FFF5F5",
          50: "#FDECEC",
          100: "#FADADA",
          200: "#F4B5B5",
          300: "#EE9090",
          400: "#E76B6B",
          500: "#C81020",
          600: "#A50D1A",
          700: "#820A14",
          800: "#5F070F",
          900: "#3C0409",
        },

        brand: {
          dark: "#222222",
          gray: "#EEEEEE",
          muted: "#666666",
          light: "#BBBBBB",
          white: "#FFFFFF",
        },
      },

      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },

      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #C81020 0%, #A50D1A 100%)",
      },

      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        hover: "0 20px 40px rgba(0,0,0,0.12)",
      },
    },
  },

  plugins: [],
};

export default config;