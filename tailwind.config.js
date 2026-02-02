export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds - Softer black and white
        "bg-dark": "#0D0D0D", // Near-black
        "bg-dark-surface": "#1A1A1A", // Slightly lighter surface
        "bg-light": "#FAFAFA", // Soft white
        "bg-light-surface": "#FFFFFF", // Pure white for cards

        // Borders - Subtle contrast
        "border-dark": "#2A2A2A", // Dark gray border
        "border-light": "#E5E5E5", // Light gray border

        // Text colors for dark mode
        "text-dark-primary": "#FFFFFF",
        "text-dark-secondary": "#A0A0A0",
        "text-dark-muted": "#6B6B6B",

        // Text colors for light mode
        "text-light-primary": "#0A0A0A",
        "text-light-secondary": "#6B6B6B", // Lighter gray for better distinction
        "text-light-muted": "#9E9E9E",

        // Accent colors - Higher contrast for active states
        "accent-light": "#1A1A1A", // Near-black for light mode (strong contrast)
        "accent-dark": "#E8E8E8", // Very light gray for dark mode

        // Optional: Additional accent for highlights
        "accent-hover-light": "#2D3748", // Darker on hover (light mode)
        "accent-hover-dark": "#F5F5F5", // Lighter on hover (dark mode)
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-up": "fadeUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
