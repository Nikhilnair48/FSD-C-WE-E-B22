function getUserIDPromise() {
  return new Promise((resolve, reject) => { // Added reject
    setTimeout(() => {
      console.log("Fetched User ID: 123");
      const success = true; // Math.random() > 0.1;
      if (success) resolve(123);
      else reject(new Error("Could not get User ID"));
    }, 500);
  });
}

function fetchUserDataPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 0) return reject(new Error("Invalid ID for User Data"));
      console.log(`Fetched User Data for ID: ${id}`);
      resolve({ name: "Alice", id: id });
    }, 500);
  });
}

function fetchUserPostsPromise(userData) {
  return new Promise((resolve, reject) => { // Added reject
    setTimeout(() => {
      console.log(`Fetched Posts for User: ${userData.name}`);
      resolve(["Post 1", "Post 2"]);
    }, 500);
  });
}

console.log("Starting Promise chain sequence...");
getUserIDPromise()
  .then((userId) => { // Receives 123
    return fetchUserDataPromise(userId); // Returns a new Promise
  })
  .then((userData) => { // Receives { name: "Alice", id: 123 }
    return fetchUserPostsPromise(userData); // Returns another new Promise
  })
  .then((posts) => { // Receives ["Post 1", "Post 2"]
    console.log("Successfully fetched posts via Promise chain:", posts);
    console.log("Promise chain sequence complete!");
  })
  .catch((error) => { // Single catch for any error in the chain
    console.error("Error in Promise chain:", error.message);
  });