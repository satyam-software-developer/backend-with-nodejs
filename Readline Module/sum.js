// Import the 'readline' module to interact with the input and output streams.
const readline = require('readline');

// Create an interface for reading from the standard input and writing to the standard output.
const rl = readline.createInterface({
    input: process.stdin,   // Specify the standard input as the input stream.
    output: process.stdout  // Specify the standard output as the output stream.
});

// Prompt the user to enter the first number.
rl.question('Enter the first number: ', (num1) => {
    // After the user enters the first number, prompt them to enter the second number.
    rl.question('Enter the second number: ', (num2) => {
        // Parse the input numbers as integers and calculate their sum.
        const sum = parseInt(num1) + parseInt(num2);
        // Display the sum to the user.
        console.log(`The sum is: ${sum}`);
        // Close the readline interface to release the resources associated with it.
        rl.close();
    });
});
