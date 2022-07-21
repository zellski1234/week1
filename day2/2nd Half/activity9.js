let num1 = 2
let num2 = 6

//adds num1 and num2
let sum = num1 + num2

//if there is no remainder sum is even
if (sum % 2 == 0){
    console.log(`${sum} is the sum of num1 and num2, which is an even number.`);

    return sum;
}
//if there is a remainder sum is odd
else {
    //multiply num1 and num2
     let multi = num1 * num2
     console.log(`The sum is odd, so the numbers multiplied together are ${multi}`);
     return multi;

}
