// Please do not change the prewritten code

const fs = require("fs");

// Define a function named Solution
const Solution = () => {
  // Read the content of the "note.txt" file
  fs.readFile("note.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err); // Log any error that occurred during file reading
    } else {
      console.log(data); // Log the data read from the file
    }
  });

  // Append new data to the "note.txt" file
  fs.appendFile("note.txt", " new data", (err) => {
    if (err) {
      console.log(err); // Log any error that occurred during file appending
    }
  });

  // Log a message indicating that the data was updated successfully
  console.log("data updated successfully");
};

// Call the Solution function
Solution();

// Export the Solution function
module.exports = Solution;

