// let space1 = "X"
// let space2 = "O"
// let space3 = " "
// let space4 = "X"
// let space5 = "X"
// let space6 = " "
// let space7 = "O"
// let space8 = " "
// let space9 = " "



// console.log (
//     `
//       |   |   
//     ${space1} | ${space2} | ${space3} 
//       |   |   
//    -----------
//       |   |   
//     ${space4} | ${space5} | ${space6} 
//       |   |   
//    -----------
//       |   |   
//     ${space7} | ${space8} | ${space9} 
//       |   |   
//      `
// )

let birthday = new Date(2023, 5 , 2)
let today = new Date()
diffTime = birthday-today
diffDays = diffTime / (1000 * 3600 * 24)
console.log(`There are ${Math.round(diffDays)} days until my birthday`)

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your name\n", function (string) {
  userInput = string;

  console.log("Your name is " + userInput);

  // close input stream
  rl.close();
});