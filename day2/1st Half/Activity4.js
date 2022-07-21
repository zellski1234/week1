// // import readline module
// const { Console } = require("console");
// const readline = require("readline");

// // create interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // create empty user input
// let userInput = "";
// let lines = 5
// // question user to enter name
// rl.question("enter x or o \n", function (string) {
//   userInput = string;

//   // close input stream
//   rl.close();


let space1 = " "
let space2 = "x"
let space3 = "o"
let space4 = "x"
let space5 = "x"
let space6 = " "
let space7 = "o"
let space8 = " "
let space9 = " "



console.log (
    `
      |   |   
    ${space1} | ${space2} | ${space3} 
      |   |   
   -----------
      |   |   
    ${space4} | ${space5} | ${space6} 
      |   |   
   -----------
      |   |   
    ${space7} | ${space8} | ${space9} 
      |   |   
     `
)