// for (let i = 0; i < 10000000000; i++) {
//   // I am doing nothing, just consuming time.
// }
// console.log("Task to be performed after loop");

// console.log("I have to wait for this long loop to finish : (");

setTimeout(() => {
  console.log("Task to be performed after 8 seconds");
}, 8000);

console.log("I do not have to wait for this long loop to finish. Yay :)");
