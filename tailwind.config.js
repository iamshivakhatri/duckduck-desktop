// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	darkMode: ['class'],
	theme: {
	  extend: {
		colors: {
		  border: 'hsl(var(--border))', // Define custom border color
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		},
	  },
	},
	plugins: [
	  function ({ addUtilities }) {
		addUtilities({
		  '.border-border': {
			borderColor: 'hsl(var(--border))',
		  },
		});
	  },
	],
  };
  