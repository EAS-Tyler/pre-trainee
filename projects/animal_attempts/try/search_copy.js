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

/*
rl.question("Please enter your choice:", function(name) {
    rl.question("Please enter the name of the animal: ", function(name) {
        
        
        
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});
*/
/*
var searchAni = searchAni 
var answer = answer
*/
const anii = searchAni()

rl.question("Welcome to the Animal Data Processor! \n \n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n\n Please enter your choice:", function(choice) {
   
    function searchAni(choice) {
        var answer = "";
        switch(choice){
            case 1:
                answer = animals[1];
                break;
            case 2:
                answer = animals[2];
                break;

                return answer; 
        }



        rl.close();
        
        };
    }); 
    console.log(searchAni())










  /*  rl.question("\n Where do you live ? ", function(country) {
        console.log(`${country}, is a citizen of ${country}`);
        rl.close();
    });
});

*/
