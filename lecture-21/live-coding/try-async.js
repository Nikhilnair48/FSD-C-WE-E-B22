// Example of uncaught error
// Why? Because the setTimeout is an asynchronous code block
// The rest of code, which is synchronous, completes execution
// Before the 500 milliseconds used by setTimeout
// Hence, the custom error isn't handled by the "catch" block
try {
  setTimeout(() => {
    throw new Error("Error inside timer!");
  }, 500);
} catch (e) {
  console.error("Caught error:", e.message);
}