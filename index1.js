// Import required module
// Import the readline module
const readline = require("readline");

// Create an interface to receive user input
const qInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Solution = () => {
  // Write your code here
  // Prompt the user to enter the first number
  qInterface.question("Enter the first number: ", (num1) => {
    // Prompt the user to enter the second number
    qInterface.question("Enter the second number: ", (num2) => {
      // Convert the input strings to numbers
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      // Check if both inputs are valid numbers
      if (!isNaN(number1) && !isNaN(number2)) {
        // Calculate the maximum of the two numbers
        const maxNumber = Math.max(number1, number2);
        // Log the maximum value to the console
        console.log("The maximum of the two numbers is:", maxNumber);
      } else {
        // Log an error message for invalid inputs
        console.log("Invalid input. Please enter valid numbers.");
      }

      // Close the interface after usage
      qInterface.close();
    });
  });
};

Solution();
module.exports = Solution;