
// const person = {
//     name: 'Brett',
//     age: 28,
//     favSongs: [
//         'Hit the Floor',
//         'Remenissions',
//         'Down the Human'
//     ],
//     sayHi () {
//         return `Hello, my name is ${this.name}.`
//     }
// };

// console.log(person.favSongs);
// console.log(person.sayHi());


const person = {
    name: "Hamza",
    age: 18,
    movies: ["A New Hope", "Avengers", "Dark Knight"],
    sayHi (){
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.sayHi())
console.log(`I am ${person.age} and my Top 3 movies are:\n${person.movies[0]}\n${person.movies[1]}\n${person.movies[2]}`)
