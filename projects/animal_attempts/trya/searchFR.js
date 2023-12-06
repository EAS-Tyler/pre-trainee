var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please write animal name: ", function(nameA) {

    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name == nameA) {
            console.log(animals[i])
        }
    }
    rl.close();
});



rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
    });
    
    

// waa the === that did it? 





/* 
rl.question("What is your name? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
*/

// if (name = aniName)