//24 hour clock
let time = 9;
let placeOfWork = 9; 
let townOfHome = 7;

if (time >= placeOfWork && time < 17) {
    console.log("I'm at work.");
}
else if (time == townOfHome || (time >= 18 && time < 22) ) {
    console.log("I'm at home.");
}
else if (time == (placeOfWork-1)) {
    console.log("I'm likely commuting.");
}
else if(time >= (placeOfWork+8) && time < 18) {
    console.log("I'm likely on my way home.");
}
else if (time >= 22 || time < townOfHome) {
    console.log("I'm probably asleep");
}
else (
    console.log("Use numbers only from 0-23")
);
