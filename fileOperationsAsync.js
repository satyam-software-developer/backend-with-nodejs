const fs = require("fs");

// Reading data from the file "data.txt"
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.log(err); // Log any error that occurred during file reading.
  } else {
    console.log(data.toString()); // Convert buffer data to string and log it to the console.
  }
});

// Writing data to the file "employee.txt"
fs.writeFile("employee.txt", "New Employee\n", (err) => {
  if (err) {
    console.log(err); // Log any error that occurred during file writing.
  } else {
    console.log("File is written"); // Log success message after writing to the file.
  }
});

// Appending data to the file "employee.txt"
fs.appendFile("employee.txt", "Another Employee", (err) => {
  if (err) {
    console.log(err); // Log any error that occurred during file appending.
  } else {
    console.log("File is updated"); // Log success message after appending to the file.
  }
});

// Deleting the file "employee.txt"
fs.unlink("employee.txt", (err) => {
  if (err) {
    console.log(err); // Log any error that occurred during file deletion.
  } else {
    console.log("File is deleted"); // Log success message after deleting the file.
  }
});

console.log("This is another operation"); // Log a message indicating another operation outside file operations.

