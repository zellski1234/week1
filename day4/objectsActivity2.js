//pet object
const pet = {
    name: "Coco",
    typeOfPet: "Cat",
    age: 2,
    Colour: "Black",
    eat (){
        return `${this.name} is eating`;
    },
    drink (){
        return `${this.name} is drinking`
    },
    hunger: Math.round(Math.random()*1), //random number between 0 and 1
    thirst: Math.round(Math.random()*1) //random number between 0 and 1
};

//--------------------------------------------------------------------------------

console.log(`Hunger = ${pet.hunger} Thirst = ${pet.thirst}`);
console.log("");

if (pet.hunger == 1 && pet.thirst == 0){
    console.log (pet.eat()) //pet is hungry but not thirsty
}
else if (pet.thirst == 1 && pet.hunger == 0){
    console.log (pet.drink()) //pet is thirsty but not hungry
}
else if (pet.thirst == 1 && pet.hunger == 1){
    console.log (`${pet.name} is hungry and thirsty`) //pet is hungry and thirsty
}
else{
    console.log (`${pet.name} is not hungry or thirsty`) //pet is not hungry and thirsty
}

