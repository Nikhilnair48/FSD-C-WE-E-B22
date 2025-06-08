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

console.log("Promise created (currently pending). Attaching .then() and .catch()...");

dataFetchPromise
  .then((result) => { // onFulfilledCallback
    console.log("Promise Fulfilled! Value:", result);
    // Process the result.data here
  })
  .catch((error) => { // onRejectedCallback
    console.error("Promise Rejected! Reason:", error.message);
  })
  .finally(() => {
    console.log("Promise settled (either fulfilled or rejected). Cleanup can happen here.");
  });

console.log("Main script continues while Promise is pending...");