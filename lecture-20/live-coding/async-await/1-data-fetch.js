// Reusing the previous promise

console.log("Creating a new Promise...");
const dataFetchPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.4; // Simulate success/failure
    if (isSuccess) {
      resolve({ data: "Sample user data", userId: 1 });
    } else {
      reject(new Error("Failed to fetch data from server!"));
    }
  }, 1000);
});

async function fetchDataWithAsyncAwait() {
  console.log("Async function started. Waiting for promise...");
  try {
    const result = await dataFetchPromise; // Pauses here until dataFetchPromise settles
    console.log("Async/Await - Promise Fulfilled! Value:", result);
    // Process result.data
    return result; // This will be the resolved value of the fetchDataWithAsyncAwait promise
  } catch (error) {
    console.error("Async/Await - Promise Rejected! Reason:", error.message);
    // throw error; // Optionally re-throw if you want the caller to handle it
  } finally {
    console.log("Async function settled (try or catch finished).");
  }
}

fetchDataWithAsyncAwait()
  .then(finalResult => console.log("Final result from async function:", finalResult))
  .catch(finalError => console.log("Final error from async function:", finalError)); // If error was re-thrown

console.log("Code after calling async function (runs before promise resolves)");