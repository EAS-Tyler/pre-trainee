var fs = require('fs')
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/trya/animaldata.json'))
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {

    rl.question("Please select an option: ", function(choice) {
       /* if (choice == 1){
            console.log(listAll())
            return;
        }
        if (choice == 2){
            console.log(searchA())
        }
        if (choice == 3){
            console.log(calcA())
        }
        if (choice == 2){
            console.log(exit())
        } */
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
    })
}

function listAll() {
    console.log("\nAvailable animals: \n")
for (let i = 0; i < animals.length; i++) {
console.log(i+1 + ". " + animals[i].name);
}
}

console.log(menu())