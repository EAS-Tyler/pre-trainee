var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

console.log("Available animals: \n")

for (let i = 0; i < animals.length; i++) {
    console.log(i+1 + ". " + animals[i].name)
}

// make the names be presented in numerical order 
