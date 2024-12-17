const fs = require("fs");

// console.log("Starting to read");

// // Read file content using blocking code
// try {
//   const buffer = fs.readFileSync("data.txt", {encoding: 'utf8'});
//   console.log(buffer); // Convert buffer to string for readability
// } catch (err) {
//   console.error("Error reading the file:", err);
// }

// Creating and writing a file.
try {
  fs.writeFileSync(
    "employee.txt",
    "Name: John Doe, Age: 40, Position: Manager \n"
  );
} catch (err) {
  console.log(err);
}

// Append another employee data
fs.appendFileSync("employee.txt", "Name: David Doe, Age: 55, Position: COO");

// Deleting a file

// try {
//   fs.unlinkSync("employee.txt");
// } catch (err) {
//   console.log("File doesn't exist");
// }

console.log("This is another operation being performed");
