// // Note:  Please do not change the pre-written code

// // import the required module here

// const Solution = () => {
//   const nums = [1, 2, 3, 4, 5];
//   // write your code here to Display the results of the calculations on the console.
//   const mathModule = require("./math");

//   // call sum function.
//   const sumResult = mathModule.sum(nums);
//   console.log("The sum is " + sumResult);
//   const meanResult = mathModule.mean(nums);
//   console.log("The mean is " + meanResult);
// };
// Solution();
// module.exports = Solution;


// app.js - our main application file
// const math = require("./math.js");

// Importing specific functions 'sum' and 'mean' from the './math.js' module.
import { sum, mean } from "./math.js";

// Define an array of numbers.
const nums = [1, 2, 3, 4, 5];

// Calculate the sum of the numbers using the 'sum' function imported from './math.js'.
console.log(`The sum is ${sum(nums)}`);

// Calculate the mean (average) of the numbers using the 'mean' function imported from './math.js'.
console.log(`The mean is ${mean(nums)}`);
