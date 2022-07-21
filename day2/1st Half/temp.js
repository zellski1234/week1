const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let slots = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
let inputProm = new Promise(function(inputRes, inputRej) {
    console.log(
    `
       |  |  |   
      ${slots[0]} | ${slots[1]} | ${slots[2]} |   
       |  |  |   
    ---------------
       |   |   |   
      ${slots[3]} | ${slots[4]} | ${slots[5]} |   
       |   |   |   
    ---------------
       |   |   |   
      ${slots[6]} | ${slots[7]} | ${slots[8]} |   
       |   |   |   
    `
    )
    let userInput = "";     
        rl.question("Please select an empty slot, 1 - 9 from the top left to the bottom right.\n", function (string) {
            userInput = string;
            rl.close();
        });
        if (slots.includes(userInput)) {
        inputRes("Success");
        } else {
        inputRej("Error");
        }
});

// if (1 === "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }