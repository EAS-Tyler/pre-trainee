var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/user_accounts.json'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var newId 
var newUsername
var newPass
var confirmPass

var newUser = {
    "id": newId,
    "username": newUsername,
    "password": newPass
}

function createAcc() {
    rl.question("Please enter a unique username: ", function (newUsername) {
        for (var i = 0; i < obj.users.length; i++){
        if (newUsername == obj.users[i].username){
            console.log("This username is already taken, please choose a new one -\n")
            return createAcc()
        }
    }
        rl.question("Please enter a password: ", function (newPass) {
            newUser.id  = obj.users.length + 1
            newUser.username = newUsername;
            newUser.password = newPass;
            obj.users.push(newUser)
            console.log(obj.users)
            rl.close();
        })
})     
}
// confirm password

// change id to be automatically incrimented 
createAcc()











