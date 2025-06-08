console.log("Fetching data with fetch()...");
fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch returns a Promise
  .then(response => {
    console.log("Initial response received. Is it OK?", response.ok);
    if (!response.ok) { // Error handling for bad HTTP status
      console.log(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // .json() also returns a Promise
  })
  .then(data => {
    console.log("Data processed to JSON:", data);
    // Use the data (e.g., display it on the page)
  })
  .catch(error => {
    console.error("Fetch API Error:", error);
  });