const plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-900": "#040404",
				"dark-800": "#1c1c1c",
				"dark-700": "#1a1a1a",
				"dark-300": "#242424",

				"spwn-p": "#e421a6",
				"spwn-p-light": "#e024c7",
				"spwn-g": "#05c286",
				"spwn-g-light": "#09cea0",

				"txt": "#ffffff",

				"transparent": "transparent",
			}
		},
		fontSize: {
			"xsm": "1.1rem",
			"sm": "1.2rem",
			"md": "1.4rem",
			"lg": "1.5rem",
			"xlg": "2rem",
		},
		screens: {
			"sm": { "max": "650px" },
			"md": "650px",
			"lg": "1200px",
		}
	},
	plugins: [
		plugin(({ matchUtilities }) => {
			matchUtilities(
				{
					"webkit-stroke": (value) => {
						return {
							"-webkit-text-stroke": value,
						}
					},
				},
			)
		})
	],
}
