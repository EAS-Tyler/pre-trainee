var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

console.log("Welcome to the Animal Data Processor! \n\n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n ")
