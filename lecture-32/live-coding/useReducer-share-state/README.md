E-commerce Shopping Cart Example

A simple React demo showcasing how to share state between components using only useReducer. It implements an online store with a product list and a shopping cart without using React Context.

Features
	•	Global cart state managed by a reducer in the parent component
	•	Add to Cart and Remove from Cart actions
	•	Real-world example: Products and cart
	•	No Context API—state and dispatch are passed via props

Getting Started
	1.	Fetch the latest from the FSD-C-WE-E-B22 repository on Github

cd FSD-C-WE-E-B22 (on your local machine)
git pull origin main
cd lecture-32/live-coding/useReducer-share-state


	2.	Install dependencies

npm install


	3.	Run the development server

npm run dev

The app will be available at http://localhost:5173.

Project Structure

src/
├── App.jsx           # Root component with useReducer setup
├── cartReducer.js    # Reducer and initial state for the cart
├── ProductList.jsx   # Displays products and dispatches add actions
└── Cart.jsx          # Shows cart items and dispatches remove actions

Core Concepts
	•	useReducer: Manages complex state updates and encapsulates action logic.
	•	Prop drilling: Passing state and dispatch to child components for a shared store.
