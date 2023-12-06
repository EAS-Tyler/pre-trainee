var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/try/animaldata.json'));

var animals = obj.animals

/* 
for (i = 0; i < animals.length; i++) {
console.log(animals[i].name)
}
*/

// console.log(obj.animals[1])

// test w question 

rl.question("Please enter your choice:", function(name) {
    rl.question("Please enter the name of the animal: ", function(name) {
        
        
        
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
