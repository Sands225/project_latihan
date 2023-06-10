/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		screens: {
			phone: { max: "600px" },
			// => @media (max-width: 600px) { ... }
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			max_1200: { max: "1200px" },

			desktop: "1200px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			keyframes: {
				"loading-opacity": {
					"0%, 100%": { opacity: "100%" },
					"50%": { opacity: "20%" },
				},
				"going-up": {
					"0%": { transform: "translateY(40px)", opacity: "0%" },
					"100%": { transform: "translateY(0px)", opacity: "100%" },
				},
				"fade-in": {
					"0%": { opacity: "0%" },
					"100%": { opacity: "100%" },
				},
			},
			animation: {
				"fade-in": "fade-in 1s ease-in fowards",
				"loading-TDCXII": "loading-opacity 3s linear infinite",
			},
		},
		variants: {
			animation: ["motion-safe"],
		},
	},
	plugins: [],
};
