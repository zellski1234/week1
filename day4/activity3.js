//Cash correctPin time!

//Let's create one that;

// > Dispenses cash if your pin number is correct and your
// balance is equal to, or more than, the amount you’re
// trying to withdraw!


let bal = (Math.floor(Math.random() * 9999)) //random balance
let pin = 4213
let correctPin = false
let pinAttempt = 0
let locked = false


//--------------------------------------------------------------------------------------------
//function 1
//Pin input code
const EnterPin = (pinNum) => {
    if (pinNum == pin && locked == false) {
        console.log("The entered pin is correct")
        correctPin = true
        return true;
    }
    else if (pinAttempt == 3) { //locks card
        locked = true
        console.log(`You have attempted ${pinAttempt} times and reached maximum attempts this card is now locked try again later`)
        correctPin = false

        pinAttempt++
    }
    else if (locked == true){ //remind user card is locked even if attempt is now correct
        console.log(`This card is now locked try again later`)
        correctPin = false
        
        pinAttempt++
    }
    else {
        pinAttempt++
        console.log(`Attempt no: ${pinAttempt}`)
        console.log(`${pinNum} is incorrect`)
        console.log(" ")
        correctPin = false
    }
}
//--------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------
//function 2
//Withdrawing code
const Withdraw = (cash) => {
    if (bal >= cash && correctPin == true && locked == false ){
        bal = bal - cash
        console.log(`You have Withdrawn £${cash}\n£${bal} is your remainding balance`)

    }
    else if (bal < cash && correctPin == true ){
        console.log(`Your balance is less ${cash} please enter a lower ammount`)
    }
    else {
    //should not allow withdrawing if card is locked
    }
}
//--------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
//function 3
//Balance check
const balcheck = () => {
    if (correctPin == true && locked == false ){
        console.log(`Your current balance is £${bal}`)
    }
}
//--------------------------------------------------------------------------------------------


//enter pin
EnterPin(4135)
EnterPin(1133)
// EnterPin(4136)
// EnterPin(4136)
EnterPin(4213)
//enter withdraw ammount
balcheck()
Withdraw(1000)