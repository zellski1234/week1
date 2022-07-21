// Imagine you’re a programmer for a social media platform! You have
// been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers.
// In these arrays place 4 names as strings. Make sure there are 2 names
// that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the
// matching follower

let bobsFollowers = ["John","Joe","Bob","Tom"]
let hannahsFollowers = ["Jack","Tom","Jamal","Joe"]


// for(let i = 0; i < bobsFollowers.length; i++){
//     for(let j = 0; j < hannahsFollowers.length; j++){
//         if (bobsFollowers[i]==hannahsFollowers[j]){
//             console.log(bobsFollowers[i])
//         }
//     }
// }
let i = 0
while(i < bobsFollowers.length){
    let j =  0
    while(j < hannahsFollowers.length){
        if (bobsFollowers[i]==hannahsFollowers[j]){
            console.log(bobsFollowers[i])}
        j++
    }
        i++
};