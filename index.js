// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
  // Write your code here
  // Creating and writing a file.
try {
  fs.writeFileSync(
    "notes.txt",
    "The world has enough coders \n"
  );
} catch (err) {
  console.log(err);
}

// Append another employee data
fs.appendFileSync("notes.txt", "The world has enough coders BE A CODING NINJA!");

//Read file content using blocking code
try {
  const buffer = fs.readFileSync("notes.txt", {encoding: 'utf8'});
  console.log(buffer); // Convert buffer to string for readability
} catch (err) {
  console.error("Error reading the file:", err);
}

};
Solution();
module.exports = Solution;
