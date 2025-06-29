# Homework: Complete the Interactive Playlist Builder

## Overview

Currently, the playlist application does the following:
* It displays a hardcoded list of 90s songs
* It features a working search bar that filters the playlist in real-time based on the song title

[Current state of the application](./screenshots/current-playlist.png)

Your task is to add two new features. More details below.

Note: you may use the CSS classes in [Playlist.css](./my-react-project/src/components/Playlist.css), or update them as necessary.

## Task 1: Display the Total Playlist Duration

**Requirements:**
1.  Inside the `Playlist` component, calculate the total duration of all the songs in the original `songs` state array. The duration for each song is provided in seconds.
2.  Convert the total duration from seconds into a more readable `minutes:seconds` format. For example, `301` seconds should be displayed something like `5m 1s`.
3.  Display this calculated duration at the top of the playlist

[UI Reference](./screenshots/task-1-reference.png)

**Hint:** This is the use case for the `Array.prototype.reduce()` method

## Task 2: Implement "Remove Song" Functionality

To permit a user should to remove a song from the playlist, you will have to manage state across components.

**Requirements:**
1.  **Create a `SongItem` Component:**  Name the component `SongItem.jsx`, which will contain the `<li>` elements and its contents for a single song from `Playlist.jsx`
2.  **Render `SongItem` Components:** In `Playlist.jsx`, `.map()` over your songs array and render a `<SongItem />` for each song, passing the song data down as props
3.  **Add a "Remove" Button:** Inside the `SongItem` component, add a "Remove" button next to each song's details
4.  **Lift State Up:** The `songs` array lives in the `Playlist` component's state. Therefore, the function that *modifies* this state must also live in the `Playlist` component
5.  **Implement Child-to-Parent Communication:**
    * Create a `handleRemoveSong` function in the parent (`Playlist.jsx`). This function should accept a song's `id` as an argument
    * Inside `handleRemoveSong`, use an array method to create a **new** array that contains all songs *except* the one with the matching `id`. Update the *state* with this new array. **Do not directly reassign the original state array!**
    * Pass the `handleRemoveSong` function down to each `SongItem` as a prop.
    * When the "Remove" button in `SongItem` is clicked, it should call the function it received from props, passing its own song's `id` back up to the parent.

[UI Reference](./screenshots/task-2-reference.png)

**Hint:** The `Array.prototype.filter()` method may be useful for removing an item from an array

---

## Getting Started

To get the project running on your local machine, follow these steps:

1.  **Install Dependencies:** Open your terminal in the project root folder and run the command:
    ```bash
    npm install
    ```

2.  **Start the Development Server:** Once the installation is complete, run the following command:
    ```bash
    npm run dev
    ```

Your browser should automatically open to `http://localhost:5173` (or a similar address), where you'll see the current application.

---

## Submission

A Google Form will be shared for submission. You may upload your code to Google Drive (or similat platform) and provide the link.