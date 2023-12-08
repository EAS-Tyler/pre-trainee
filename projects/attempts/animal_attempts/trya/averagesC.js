var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

// need averages of Average Lifespan of All Animals: 29 years and Average Speed of All Animals: 25.33 km/h



var speedSum = 0;
for (var i = 0; i < animals.length; i++){
    speedSum += animals[i].average_speed
}
var avgSpeed = (speedSum / animals.length).toFixed(2)
console.log("\nAverage speed of all animals: " + avgSpeed + " km/h")

var lifeSum = 0;
for (var i = 0; i < animals.length; i++) {
    lifeSum += animals[i].average_lifespan
}
var avgLife = lifeSum / animals.length
console.log("\nAverage lifespan of all animals: " + avgLife + " years\n")







