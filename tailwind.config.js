export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "surface-dim": "#09090B",
        "primary-container": "#4d8eff",
        "tertiary-fixed": "#dae2fd",
        "on-surface-variant": "#c2c6d6",
        "surface-container-high": "#1c2b3c",
        "surface-bright": "#2c3a4c",
        "surface-container-highest": "#273647",
        "error": "#ffb4ab",
        "on-error": "#690005",
        "secondary-fixed-dim": "#2fd9f4",
        "on-primary-container": "#00285d",
        "on-primary-fixed": "#001a42",
        "surface-container": "#122131",
        "surface": "#09090B",
        "tertiary-fixed-dim": "#bec6e0",
        "inverse-primary": "#005ac2",
        "on-tertiary-container": "#22293d",
        "secondary-container": "#00cbe6",
        "surface-container-lowest": "#010f1f",
        "inverse-on-surface": "#233143",
        "on-error-container": "#ffdad6",
        "inverse-surface": "#d4e4fa",
        "outline-variant": "#424754",
        "primary": "#3b82f6",
        "on-primary": "#ffffff",
        "secondary-fixed": "#a2eeff",
        "surface-tint": "#adc6ff",
        "on-secondary-fixed": "#001f25",
        "tertiary-container": "#8990a8",
        "on-secondary-container": "#00515d",
        "primary-fixed-dim": "#adc6ff",
        "on-tertiary-fixed-variant": "#3f465c",
        "primary-fixed": "#d8e2ff",
        "tertiary": "#bec6e0",
        "on-tertiary-fixed": "#131b2e",
        "on-secondary-fixed-variant": "#004e5a",
        "on-primary-fixed-variant": "#004395",
        "outline": "#8c909f",
        "on-surface": "#ffffff",
        "error-container": "#93000a",
        "on-tertiary": "#283044",
        "surface-variant": "#18181b",
        "secondary": "#a855f7",
        "on-secondary": "#ffffff",
        "background": "#09090B",
        "surface-container-low": "#0d1c2d",
        "on-background": "#ffffff"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      "spacing": {
        "container-max": "1280px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "base": "8px",
        "margin-desktop": "48px"
      },
      "fontFamily": {
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg-mobile": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "display": ["Space Grotesk", "sans-serif"],
        "outfit": ["Outfit", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Geist Mono", "monospace"],
        "body-md": ["Inter", "sans-serif"],
        "mono-code": ["Geist Mono", "monospace"]
      },
      "fontSize": {
        "headline-lg": ["48px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-md": ["30px", {"lineHeight": "1.3", "fontWeight": "600"}],
        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "headline-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "1.5", "letterSpacing": "0.05em", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "mono-code": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}]
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" }
        }
      }
    }
  },
  plugins: [],
}
