// // Please do not change the prewritten code
// const axios = require("axios");
// const Solution = async () => {
//   // Write your code here

//   const response = await axios.get(
//     `https://api.codingninjas.com/api/v3/event_tags`
//   );
//   console.log(response.data);
// };
// Solution();
// module.exports = Solution;


import axios from "axios";

const Solution = async () => {
  try {
    const response = await axios.get(
      `https://api.codingninjas.com/api/v3/event_tags`
    );
    console.log(response.data);
    return response.data; // Return data if needed
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-throw error if needed
  }
};

export default Solution;
