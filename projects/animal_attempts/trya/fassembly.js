var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// make reusabkle functions
// make infinate loop, using functions
// main menu function?

function menu() {
    console.log("\nWelcome to the Animal Data Processor! \n\n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n ")
    rl.question("Please select an option: ", function(choice) {
        switch(choice){
            case 1:
                console.log(listAll());
                break;
            case 2:
                console.log(searchA());
                break;
            case 3:
                console.log(calcA());
                break;
            case 4:
                console.log(exit());
                break;
        }
        rl.close();
    })
}

function listAll() {
    console.log("\nAvailable animals: \n")
for (let i = 0; i < animals.length; i++) {
console.log(i+1 + ". " + animals[i].name);
}
}

function searchA() {
    rl.question("\nPlease write animal name:\n", function(nameA) {     // \n gets rid of highlighted %

        for (var i = 0; i < animals.length; i++) {
            if (animals[i].name == nameA) {
                console.log(animals[i])
            }
        }
      } )}
        

function calcA() {
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
        console.log("\nAverage lifespan of all animals: " + avgLife + " years")
}

function exit() {
    rl.on("close", function() {
        console.log("\nGoodbye!\n");
        process.exit(0);
        });
}

console.log(menu())


       // console.log("\nPlease enter one of the listed options: ")
   


    // use switch statement
// make reusabkle functions
// make infinate loop, using functions
// main menu function?
// why is my else statement now popping up?

// why cant i input when using option 2
// ${name} ??

 // need to loop program after each IF statement
 // need choice 2 to work 



