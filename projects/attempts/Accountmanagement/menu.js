// write back object to json file
// do not allow blanks in username or password - can use a regex to validate
// add delete account


var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/user_accounts.json'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("Welcome to the User Account Management System!\n")

var newUser = {
    "id": 0,
    "username": "",
    "password": ""
}
function mMenu() {
    rl.question("1. Register an Account\n2. Log in\n3. Exit \n\nPlease enter your choice: ", function (choice) {
        if (choice == 1) {
            createAcc()
            createPass()
        }
        if (choice == 2) {
            loginn()
        }

        if (choice == 3) {
            console.log("Byeeeee")
            process.exit(0);
        }
    }
    )
}
function validatePass(valid) {

}
function loginn() {
    rl.question("\nEnter your Username:\n", function (userNa) {
        for (var i = 0; i < obj.users.length; i++) {
            if (userNa == obj.users[i].username) {
                // loggedInUser = i
                enterpw(i)
                options(i)
                return;
            }
        }
        console.log("\nUsername does not exist -")
        return loginn()
    }
    )
}
function entNewPass(i) {
    rl.question("\nEnter your new password:\n", function (pass) {
        if (pass == obj.users[i].password){
            console.log("You cannot use your old password, please enter a new password -")
            entNewPass(i)
        }
        rl.question("Please confirm your password:\n", function (confPass) {
            if (pass !== confPass) {
                console.log("\nYour passwords do not match, please try again")
                entNewPass(i)
            }
            if (pass == confPass) {
                console.log("\nPassword successfully changed!\n")
                obj.users[i].password = pass
                options(i)
            }
        })
    })
}
function enterpw(i) {
    rl.question("\nEnter your password:\n", function (pass) {

        if (pass !== obj.users[i].password) {
            console.log("\nIncorrect password, please try again -")
            return enterpw(i)
        }
        if (pass == obj.users[i].password) {
            console.log("\nLogin successful!")
            return options(i)

        }
    })
}
function createAcc() {
    rl.question("Please enter a unique username: \n", function (newUsername) {
        for (var i = 0; i < obj.users.length; i++) {
            if (newUsername == obj.users[i].username) {
                console.log("\nThis username is already taken, please choose a new one -\n")
                return createAcc()
            }
        }
        newUser.username = newUsername;
        createPass()
    })
}
function createPass() {
    rl.question("Please enter a password: \n", function (newPass) {
        rl.question("Please confirm your password: \n", function (confirmPass) {
            if (confirmPass !== newPass) {
                console.log("Your passwords do not match, please try again -\n")
                return createPass()
            }
            if (confirmPass == newPass) {
                console.log("\nPassword successfully created\n")
                newUser.id = obj.users[obj.users.length - 1].id + 1
                newUser.password = newPass;
                obj.users.push(newUser)
                return mMenu()
            }
        })

    })
}
function options(i) {
    rl.question("1. Change Password\n2. Log out\n\nPlease enter your choice:\n", function (choice) {
        if (choice == 1) {
            entNewPass(i)
        }
        if (choice == 2) {
            console.log("\nYou have been successfully logged out\n")
            mMenu()
        }
    })
}
mMenu()
