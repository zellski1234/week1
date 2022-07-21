//Declaration(1) it does the same as arrow function

function square(number) {
    return number * number;
}

square(5);

//output: 25


//-----------------------------------------------


//Expression(2) 

const square = function(number) {
    return number * number;
}

square(5);
//output: 25


//-----------------------------------------------

// Aroow Function syntax

const square = (number) => {
    return number * number;
}

square(5);

//output: 25