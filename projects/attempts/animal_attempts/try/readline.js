const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Welcome to the Animal Data Processor! \n \n 1. List All Animals \n 2. Search for an Animal \n 3. Calculate Averages \n 4. Exit \n\n Please enter your choice:", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
