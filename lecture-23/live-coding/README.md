# Heroes and Monsters Manager

Styles

### **Hero & Monster Manager: Style Guide Overview**

This document outlines the core visual elements and consistent styling principles used in our "Hero & Monster Manager" application. We primarily rely on **Tailwind CSS** utility classes to achieve a clean, modern, and responsive design, supplemented by minimal custom CSS for specific effects.

---

**1. Core Principles: A Clean & Vibrant Theme**

Our application aims for a clear, engaging, and easy-to-read interface.
* **Utility-First:** We heavily use Tailwind CSS classes directly in our HTML for rapid and consistent styling.
* **Minimal Custom CSS:** Only for complex transitions or specific overrides not easily done with Tailwind.
* **Responsiveness:** Designed to adapt well to different screen sizes, from mobile to desktop.

---

**2. Color Palette & Associations**

We use a focused color palette to define the app's brand and visually categorize elements.

* **Primary/Brand Colors (Indigo & Purple):**
    * Used for the main application title, form background, and primary action buttons.
    * **`text-indigo-800`**: Main heading color.
    * **`from-indigo-500` / `to-purple-600`**: Form background gradient.
    * **`bg-purple-500` / `bg-purple-600`**: Edit buttons.
    * **`focus:ring-purple-300`**: Input focus highlight.
* **Hero & Monster Identity Colors (Green & Red):**
    * Clearly distinguishes between Heroes and Monsters.
    * **Heroes:**
        * **`bg-green-100`**: Hero card background.
        * **`border-green-400`**: Hero card border.
        * **`text-green-800`**: Hero name text.
        * **`bg-green-500`**: Healthy health bar segment.
    * **Monsters:**
        * **`bg-red-100`**: Monster card background.
        * **`border-red-400`**: Monster card border.
        * **`text-red-800`**: Monster name text.
        * **`bg-red-500`**: Low health bar segment.
* **Feedback & Neutral Colors (Blue, Yellow, Gray):**
    * **`bg-blue-100` / `text-blue-700` / `border-blue-500`**: Info messages.
    * **`bg-yellow-500` / `bg-yellow-600`**: Primary button when in "Save Changes" mode.
    * **`bg-gray-100` / `bg-gray-200` / `bg-gray-300` / `bg-gray-500` / `bg-gray-600`**: Backgrounds, input borders, disabled states, delete buttons, health bar track.

---

**3. Spacing & Padding**

We use Tailwind's consistent spacing scale (e.g., `p-` for padding, `m-` for margin, `gap-` for flex/grid gaps).

* **Overall Container:** Generous padding (`p-8`, `my-8`) to give content breathing room.
* **Sections:** Consistent padding (`p-6`, `p-8`) within form and roster areas.
* **Gaps:** Standardized `gap-4`, `gap-6`, `gap-8` for spacing between items in Flexbox and Grid layouts.
* **Component Padding:** E.g., `p-3` for input fields, `p-4` for character cards.

---

**4. Typography**

* **Font Family:** **`Inter`** (from Google Fonts) is used throughout the application for a modern and clean aesthetic.
* **Sizes & Weights:**
    * **`text-5xl` `font-extrabold`**: Main application title.
    * **`text-3xl` `font-bold`**: Section headings (e.g., "Add New Character", "Heroes Roster").
    * **`text-2xl` `font-bold`**: Character names on cards.
    * **`text-sm` `font-semibold`**: Labels and small button text.
    * **`text-gray-700`**: Standard body text for character stats.

---

**5. Borders, Corners & Shadows**

* **Rounded Corners:** Consistently use `rounded-md`, `rounded-lg`, `rounded-xl` for a soft, modern feel.
* **Borders:** `border-2` for main section outlines, `border` for inputs and subtle card distinctions.
* **Shadows:**
    * **`shadow-md` / `shadow-lg` / `shadow-xl` / `shadow-2xl`**: Applied to containers, forms, and cards to create depth and visual hierarchy.
    * **`shadow-inner`**: Used for roster backgrounds to give a subtle recessed effect.

---

**6. Layout (Flexbox & Grid)**

We demonstrate responsive layouts using Tailwind's Flexbox and Grid utilities.

* **Outer Layout (Flexbox):**
    * Main content is centered using `flex` and `justify-center`.
    * Roster sections use `flex flex-col lg:flex-row` to stack vertically on small screens and lay out horizontally on large screens.
* **Inner Card Layout (Grid):**
    * `#heroesRoster` and `#monstersDen` use **`grid`** to arrange character cards.
    * **`grid-cols-1` `sm:grid-cols-2` `md:grid-cols-1` `lg:grid-cols-2`**: Defines responsive column counts for the card display, adjusting based on screen size to optimize readability.

---

**7. Interactive States & Transitions**

To provide visual feedback and a smoother user experience, we apply transition and interactive states.

* **`transition-all` / `transition-colors`**: Ensures smooth changes for hover, focus, and active states.
* **Hover Effects (`hover:` prefixes):**
    * **`character-card:hover`**: Custom CSS applies `transform: scale(1.03)` and a larger `box-shadow` on hover, making cards feel interactive.
    * Buttons change `background-color` on hover (`hover:bg-purple-600`, `hover:bg-gray-600`).
* **Focus Effects (`focus:` prefixes):**
    * Input fields show a `ring-2` and `border-` change when focused, guiding user input.
* **Defeated State (`.defeated`):**
    * A custom class (defined in `<style>`) that reduces `opacity` and applies a `grayscale` filter for characters with 0 health.
