/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			blur: {
				400: "400px",
			},
			transitionProperty: {
				blur: "filter",
			},
			transitionDuration: {
				default: "300ms", // You can change the duration as needed
			},
			transitionTimingFunction: {
				smooth: "ease-in-out",
			},
			fontFamily: {
				"CabinetGrotesk-Regular": [
					"CabinetGrotesk-Regular",
					"sans-serif",
				],
				"CabinetGrotesk-Medium": [
					"CabinetGrotesk-Medium",
					"sans-serif",
				],
				"CabinetGrotesk-Bold": ["CabinetGrotesk-Bold", "sans-serif"],
			},
		},
	},
	plugins: [],
};
