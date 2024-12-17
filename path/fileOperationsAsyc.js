// Importing the 'fs' (File System) module for file operations.
const fs = require("fs");

// Importing the 'path' module for handling file paths.
const path = require("path");

// Setting up file paths.
const filePath = path.join("src", "home", "data.txt"); // Constructs a relative file path.
const filePathResolved = path.resolve("src", "home", "data.txt"); // Resolves the absolute file path.

// Logging the file paths to the console.
console.log(filePath); // Logs the relative file path.
console.log(filePathResolved); // Logs the resolved absolute file path.

// Finding and logging the extension of the file using the 'path.extname()' function.
console.log(path.extname(filePathResolved)); // Logs the file extension.

// Reading the contents of the file.
fs.readFile(filePathResolved, (err, data) => { // Reading the file asynchronously.
  if (err) { // Checking for errors.
    console.log(err); // Logging any error that occurs during file reading.
  } else { // If no error, log the contents of the file.
    console.log(data.toString()); // Convert buffer data to string and log it to the console.
  }
});
