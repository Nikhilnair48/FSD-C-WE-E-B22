function getUserID(callback) {
  setTimeout(() => {
    console.log("Fetched User ID: 123");
    callback(null, 123); // error-first pattern
  }, 500);
}

function fetchUserData(id, callback) {
  setTimeout(() => {
    console.log(`Fetched User Data for ID: ${id}`);
    const userData = { name: "Alice", id: id };
    // Simulate a potential error
    if (id === 0) return callback("Invalid ID for User Data", null);
    callback(null, userData);
  }, 500);
}

function fetchUserPosts(userData, callback) {
  setTimeout(() => {
    console.log(`Fetched Posts for User: ${userData.name}`);
    const posts = ["Post 1", "Post 2"];
    callback(null, posts);
  }, 500);
}

// The "Hell"
console.log("Starting callback hell sequence...");
getUserID((err, userId) => {
  if (err) {
    console.error("Error getting User ID:", err);
  } else {
    fetchUserData(userId, (err, userData) => {
      if (err) {
        console.error("Error fetching User Data:", err);
      } else {
        fetchUserPosts(userData, (err, posts) => {
          if (err) {
            console.error("Error fetching User Posts:", err);
          } else {
            console.log("Successfully fetched posts:", posts);
            console.log("Callback hell sequence complete!");
          }
        });
      }
    });
  }
});