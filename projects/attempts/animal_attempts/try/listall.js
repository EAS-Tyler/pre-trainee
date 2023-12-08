var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/try/animaldata.json'));

var animals = obj.animals

console.log(animals[1])
/*
for (i = 0; i < animals.length; i++) {
console.log(animals[i].name)
}
*/

//  console.log(animals)
