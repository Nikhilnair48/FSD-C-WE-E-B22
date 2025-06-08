function fetchDataSimulator(itemId, callback) {
  console.log(`Simulating fetching data for item: ${itemId}...`);
  // Simulate a delay (like a network request)
  setTimeout(() => {
    const data = { id: itemId, description: `Data for item ${itemId}` };
    const error = Math.random() > 0.8 ? "Network Error Simulated" : null; // Simulate potential error

    if (error) {
      callback(error, null); // Pass error first (common convention)
    } else {
      callback(null, data); // Pass data as second argument
    }
  }, 1000);
}

// Using the custom function
fetchDataSimulator(123, (err, data) => {
  if (err) {
    console.error("Error fetching data:", err);
  } else {
    console.log("Successfully fetched data:", data);
    // You could do more here with the data...
  }
});

fetchDataSimulator(456, (err, data) => {
  if (err) {
    console.error("Error fetching data for 456:", err);
  } else {
    console.log("Success for 456:", data);
  }
});