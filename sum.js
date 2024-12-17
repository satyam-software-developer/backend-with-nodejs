// // !. Import readline
// const readline = require("readline");

// // 2. Configure interface to connect with terminal/command line.

// const interface = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // 3. Reading values.
// interface.question("Enter first number ", (num1) => {
//   interface.question("Enter second number ", (num2) => {
//     // num1, num2
//     const sum = Number(num1) + Number(num2);
//     console.log(sum);
//   });
// });



// 1. Import the readline module
const readline = require("readline");

// 2. Configure interface to connect with terminal/command line.
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 3. Reading values.
// Prompt user to enter the first number
interface.question("Enter first number: ", (num1) => {
  // Prompt user to enter the second number after entering the first one
  interface.question("Enter second number: ", (num2) => {
    // Parse the input strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Check if the inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
      // Perform the addition
      const sum = num1 + num2;
      // Print the sum
      console.log("Sum:", sum);
    } else {
      console.log("Invalid input. Please enter valid numbers.");
    }

    // Close the interface
    interface.close();
  });
});
