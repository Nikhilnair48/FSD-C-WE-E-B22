# Tailwind v4 Mini Demo

Small React app that shows Tailwind v4 utilities in a Counter widget (spacing, borders, rounded, hover, focus ring).

Take a look at package.json, vite.config.js and tailwind.config.js for the initial set up.

## Run

npm i
npm run dev
open http://localhost:5173

Tailwind setup (already done)
	- Uses @tailwindcss/vite plugin (see vite.config.js).
	- src/index.css imports Tailwind: @import "tailwindcss";
	- tailwind.config.js has content paths for index.html and src/**/*.

Peek at src/App.jsx to see Tailwind classes in JSX.