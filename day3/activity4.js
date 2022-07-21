let films = [
    "Avengers",
    "The Dark Knight",
    "GhostBusters",
    "Spider-Man",
]

console.log("The Films are:")
for (let i = 0; i < films.length; i++) {
    console.log(films[i]);
};

if (films[2] == "GhostBusters") {
    console.log(`Yay it's, ${films[2]}!`)
}
else (
    console.log(`Boo! we want Ghostbusters!`)
)

// let films = ["Avatar","Star Wars","Spiderman","Ghostbusters","Shooter","Wanted","Crank"]
// const totalFilms = films.length
// let films2 = []
// for(let i = 0; i<(totalFilms); i++){
//     console.log(films[i])
// }
// for(let i = 0; i<(totalFilms); i++){
//     let randomnum = Math.floor(Math.random()*films.length)
//     films2.push(films[randomnum]);
//     films.splice(randomnum, 1);
// }
// console.log(films2)
// if(films2[2] == "Ghostbusters"){
//     console.log(`Yay its ${films2[2]}`)
// } else{
//     console.log("Boo no Ghostbusters")
// }