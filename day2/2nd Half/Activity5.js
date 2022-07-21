
palindrome("1001");

function palindrome(num) {
    let reversed = num.split("").reverse().join("");
    if (reversed === num){
        console.log(`${num} reads backwards as ${reversed}, meaning that it is a palindrome.`); 

    } else {
        
        console.log(`${num} reads backwards as ${reversed}, meaning that it is not a palindrome.`);
    }


}

