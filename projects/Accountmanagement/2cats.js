var fs = require("fs")
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/cats2.json'))

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var newName
var newCol
var newId

var newCat = {
    "id": newId,
    "name": newName,
    "colour": newCol
}
const kittyString = JSON.stringify(obj.cats, null, 2)

function kitty() {
    rl.question("Please enter cat name: ", function (newName) {
        for (var i = 0; i < obj.cats.length; i++) {
            if (newName == obj.cats[i].name) {
                console.log("This name is already taken, please choose a new one")
                return kitty()
            }
        }
        rl.question("Please enter cat colour: ", function (newCol) {
            newCat.id = obj.cats.length + 1
            newCat.name = newName;
            newCat.colour = newCol;
            obj.cats.push(newCat)
            var allKittstr = JSON.stringify(obj, null, 2)
            rl.close();
            fs.writeFileSync('/Users/trainee/Desktop/Accountmanagement/cats2.json', allKittstr)
        })
    })
}
kitty()

