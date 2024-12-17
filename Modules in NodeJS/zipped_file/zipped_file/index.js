// Please do not change the prewritten code
// Import the axios library for making HTTP requests.
const axios = require("axios");

// Define a function named Solution using async-await syntax to handle asynchronous operations.
const Solution = async () => {
  // Make an HTTP GET request to the specified URL to fetch data.
  const response = await axios.get(
    `https://api.codingninjas.com/api/v3/event_tags`
  );

  // Log the data received from the API response to the console.
  console.log(response.data);
};

// Call the Solution function to execute the asynchronous code.
Solution();

// Export the Solution function to make it accessible from other modules.
module.exports = Solution;
