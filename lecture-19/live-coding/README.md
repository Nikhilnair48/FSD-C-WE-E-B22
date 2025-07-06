# Tic Tac Toe

What is Tic Tac Toe?
- Two player game
- Two symbols (X or O). Player 1 uses X and player 2 uses O
- 3x3 grid is required
- To complete the game: one player needs to mark 3 cells in a row or column sequentially OR diagonally
- the game has different states: initial, ongoing, complete

## Process

### High level approach
- Get a design - come up with a design
- Identify the sections to be built
- Gather your assets (images) & resources (colors, etc)
- Set up our code (html, css, js)


### How do we break down the requirement?
To build a tic-tac-toe, functionally we need:
- 3x3 grid
- manage two players
- need to manage state in the game

UI:
- header
- show the user a grid
- reset button
- inform the user who's turn is it

## Phase of development (SDLC - software development lifecycle)

How can we plan our tic-tac-toe game? Let's break it down to phases:

### Phase 1
- get the HTML structure (game header, game container, restart button)
- styling for each element

### Phase 2
- handle the user interaction
- creating the inital game board, handling clicks, etc

### Phase 3
- Game management (logic for game completion)
- after every click, is the game over?

## Theme

We'll be building Tic Tac Toe with a cosmic theme. Colors required:

* **Page Background:** `bg-slate-900`
* **Game Container:** `bg-slate-950/60` with `border-slate-700` and a `shadow-2xl` (shadow color will be default black with opacity via Tailwind)
* **Game Cells (Default):** `bg-slate-800/80`
* **Game Cells (Hover):** `hover:bg-slate-700/90`
* **Grid Lines:** `border-cyan-600/60` (applied to cell borders to form the grid)
* **Winning Cell Highlight:** `background-color: rgba(250, 204, 21, 0.3);` (This is Tailwind's `amber-400` at 30% opacity for the base, animated to a higher opacity like 0.5) and `box-shadow` using similar amber/yellow colors.

* **Player X Mark:** `color: #ec4899;` (Tailwind `pink-500`) with `text-shadow: 0 0 8px #ec4899, 0 0 12px #ec4899;`
* **Player O Mark:** `color: #2dd4bf;` (Tailwind `teal-400`) with `text-shadow: 0 0 8px #2dd4bf, 0 0 12px #2dd4bf;`

* **Default Text Color (e.g., subtitle, footer):** `text-slate-400` (for less emphasis) or `text-slate-100`/`text-slate-200` (for primary readability).
* **Game Title Text ("Cosmic Clash"):** Player X color for "Cosmic", Player O color for "Clash".
* **Status Text (e.g., "Player X's turn"):**
    * Default: `text-slate-200`
    * Winner Announcement: Player X color or Player O color.
    * Draw Announcement: `text-amber-400` (Tailwind `amber-400`) with a text shadow like `0 0 8px #f59e0b;`
* **Restart Button Background:** Gradient `from-purple-600 to-pink-600`
* **Restart Button Text:** `text-white`
* **Restart Button (Hover Background):** Gradient `from-purple-700 to-pink-700`
* **Restart Button Focus Ring:** `focus:ring-pink-500/50`

# References
