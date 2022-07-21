
console.log("hello world")
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(3.1))
console.log(Math.floor(Math.random()*10))

console.log('     |      |     ')
console.log('     |      |     ')
console.log('     |      |     ')
console.log('   -----------  ')
console.log('     |      |     ')
console.log('     |      |     ')
console.log('     |      |     ')
console.log('   ----------- ')
console.log('     |      |     ')
console.log('     |      |     ')
console.log('     |      |     ')




  let line = 5

  while (line > 0) {
      if (line == 4 || line == 2) {
          line -= 1;
          console.log("-------------");
      } else {
          line -= 1
          console.log("   |      |   \n   |      |   \n   |      |   ");
      }
  }

  