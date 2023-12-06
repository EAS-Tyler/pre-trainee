var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/try/animaldata.json'));
// var animals = obj.animals
var animals = obj.animals

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* 
for (i = 0; i < animals.length; i++) {
console.log(animals[i].name)
}
*/


/*  rl.question("Welcome to the Animal Data Processor! \n \n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n\n Please enter your choice:", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
*/



rl.question("Welcome to the Animal Data Processor! \n \n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n\n Please enter your choice:", function(choice) {
  var searchAll = function searchAni(choice) { 
        if (choice = 1) {
            return animals[1]
        };
    };  if (choice = 2) {
        return animals[2]
};
});
    
console.log(searchAll())



  /*  rl.question("\n Where do you live ? ", function(country) {
        console.log(`${country}, is a citizen of ${country}`);
        rl.close();
    });
});

*/
