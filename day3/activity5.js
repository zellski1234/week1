// Create a variable, generate a
// random number between 1 and
// 30 six times, each random
// number generated, check if this
// number of divisible by 7 or not

let turn = 0
while ( turn < 6){
    let randomNum = Math.ceil(Math.random()*30);
    

    if (turn % 7 == 0){

        console.log(`${randomNum} can be divided by 7`)
    }
    else {
        console.log(`${randomNum} cannot be divided by 7`)
    }
    turn++
};

   



// for(let i = 0; i<6; i++){
//     let number = Math.ceil(Math.random()*30)
//     if(number % 7 == 0){
//         console.log(`${number} is divisible by 7`)
//     }else{
//         console.log(`${number} is not divisible by 7`)
//     }
// }


// let divisible = [];
// let notDivisible = [];

// function randomize() {
//     for(let i = 0; i<6; i++){
//         let number = Math.ceil(Math.random()*30)
//         if(number % 7 == 0){
//             divisible.push(number)
//         }else{
//             notDivisible.push(number)
//         };
//     };
// };
// randomize();
// while (true) {
//     if(divisible.length != 0) {
//         console.log(`These numbers are divisible by 7: ${divisible}`)
//     }
//     if(notDivisible.length != 0) {
//         console.log(`These numbers are not divisible by 7: ${notDivisible}`)
//     };
//     break;
// };