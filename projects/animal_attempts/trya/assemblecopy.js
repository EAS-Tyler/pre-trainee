var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("\nWelcome to the Animal Data Processor! \n\n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n ")

rl.question("Please select an option: ", function(choice) {
 
do {
    if (choice == 1) {
        console.log("\nAvailable animals: \n")
        for (let i = 0; i < animals.length; i++) {
    console.log(i+1 + ". " + animals[i].name);
    
}} 

    if (choice == 2) {
        rl.question("\nPlease write animal name:\n", function(nameA) {     // \n gets rid of highlighted %

            for (var i = 0; i < animals.length; i++) {
                if (animals[i].name == nameA) {
                    console.log(animals[i])
                }
            }
            rl.close();
        })}
        

    if (choice == 3) {
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
        

        if (choice == 4) {
        rl.on("close", function() {
            console.log("\nGoodbye!\n");
            process.exit(0);
            });
    } 
    
        else {
        console.log("\nPlease enter one of the listed options: ")
    }
       rl.close();
} while (choice != 4)
    });

 // need to loop program after each IF statement
 // need choice 2 to work 



