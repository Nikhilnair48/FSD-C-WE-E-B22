// This file acts as our mock database.
export const articles = [
  {
    id: 1,
    title: 'Why React Hooks are Awesome',
    content: `React Hooks, introduced in version 16.8, revolutionized how we write components.\n\nThey allow us to use state and other React features without writing a class. This leads to cleaner, more readable, and more composable code. Hooks like useState, useEffect, and useContext cover almost every use case you can imagine.`,
    wordCount: 58,
  },
  {
    id: 2,
    title: 'A Guide to the useEffect Dependency Array',
    content: `The dependency array is the second argument to useEffect and it's the most important part.\n\nAn empty array [] means the effect runs only once. An array with variables [var1, var2] means the effect runs whenever those variables change. Omitting it causes the effect to run on every render, which is usually a bug!`,
    wordCount: 63,
  },
  {
    id: 3,
    title: 'Client-Side Routing vs. Server-Side Routing',
    content: `The difference is simple: who handles the page change?\n\nIn server-side routing, clicking a link requests a new HTML document from the server. In client-side routing (what we're doing now), JavaScript intercepts the click, updates the URL in the browser, and swaps out components to give the illusion of a new page without a full reload.`,
    wordCount: 67,
  },
];

// Helper function to simulate fetching all articles
export const getArticles = () => {
  return articles;
};

// Helper function to simulate fetching a single article by its ID
export const getArticleById = (id) => {
  const numericId = parseInt(id, 10);
  return articles.find(article => article.id === numericId);
};