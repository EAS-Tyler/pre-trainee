// do not allow blanks in username or password - can use a regex to validate
// comment what each funtion is doing, to the date
// forgot password
// npm install md5
// make writeback to file a function, so it can be used anywhere --- use in Change password!!
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/hashing/theuser_accounts.json'));
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var md5 = require('md5');
console.log("\nWelcome to the User Account Management System!\n")
// delete user account, remove null value, write back to file
function deleteAcc(i) {
    delete obj.users[i];
    obj.users.splice(i, 1)
    var allUserStr = JSON.stringify(obj, null, 2)
    fs.writeFileSync('/Users/trainee/Desktop/hashing/theuser_accounts.json', allUserStr)
    console.log("\nYou have successfuly deleted your account!\n")
    mMenu()
}
// main menu - comparing "choice" input in if statements to call a function
function mMenu() {
    rl.question("1. Register an Account\n2. Log in\n3. Exit \n\nPlease enter your choice: ", function (choice) {
        if (choice == 1) {
            createAcc()
            return
        }
        if (choice == 2) {
            loginn()
            return
        }
        if (choice == 3) {
            console.log("\nThank you for using the Account Management System :)\n\nGoodbye!\n")
            process.exit(0);
        }
        console.log("\nThe option you have selected does not exist, please enter a single digit from the following options -\n")
        mMenu()
    }
    )
}
// log in -  comparing username input "userNa" with exisitng usernames
function loginn() {
    rl.question("\nPlease enter your Username:\n", function (userNa) {
        for (var i = 0; i < obj.users.length; i++) {
            if (userNa == obj.users[i].username) {
                // loggedInUser = i
                enterpw(i)
                options(i)
                return;
            }
        }
        console.log("\nThis Username does not exist -")
        return loginn()
    }
    )
}
// create username - comparing newUsername input to existing usernames (to see if it is already taken), calling create password function
function createAcc() {
    rl.question("\nPlease enter a unique username: \n", function (newUsername) {
        for (var i = 0; i < obj.users.length; i++) {
            if (newUsername == obj.users[i].username) {
                console.log("\nThis username is already taken, please choose a new one -")
                 createAcc()
            }
        }
       // newUser.username = newUsername;
        createPass(newUsername)
    })
}
// create password - comparing password inputs to see if they are the same, writing new account back to file
function createPass(userName) {
    rl.question("\nPlease enter a password: \n", function (newPass) {
        rl.question("\nPlease confirm your password: \n", function (confirmPass) {
            if (confirmPass == newPass) {
                let newUser = {
                    "id": 0,
                    "username":userName,
                    "password": ""
                } 
                console.log("\nAccount successfully created!\n")
                newUser.id = obj.users[obj.users.length - 1].id + 1
                newUser.password = md5(newPass); 
                obj.users.push(newUser)
                var allUserStr = JSON.stringify(obj, null, 2)
                fs.writeFileSync('/Users/trainee/Desktop/hashing/theuser_accounts.json', allUserStr)
                 mMenu()
            } 
            else {
                console.log("\nYour passwords do not match, please try again -\n")
                 createPass(userName)
            }
        })
    })
}
// enter password to login - comparing input passsword with existing (hashed) passwords
function enterpw(i) {
    rl.question("\nEnter your password:\n", function (pass) {
        if (md5(pass) == obj.users[i].password) {
            console.log("\nLogin successful!\n")
            return options(i)
        } else {
            console.log("\nIncorrect password, please try again -")
            return enterpw(i)
        }
    })
}
// create new password - comparing password input to existing (hashed) passwords, comparing password inputs to see if they are the same, updating user password
function entNewPass(i) {
    rl.question("\nEnter your new password:\n", function (pass) {
        if (md5(pass) == obj.users[i].password) {
            console.log("You cannot use your old password, please enter a new password -")
            entNewPass(i)
        }
        rl.question("\nPlease confirm your password:\n", function (confPass) {
            if (pass == confPass) {
                console.log("\nPassword successfully changed!\n")
                obj.users[i].password = md5(pass)
                // write back
                options(i)
            } else {
                console.log("\nYour passwords do not match, please try again -")
                entNewPass(i)
            }
        })
    })
}
// options when logged in - compring "choice" input to if statements to call functions
function options(i) {
    rl.question("1. Change Password\n2. Delete account\n3. Log out\n\nPlease enter your choice:\n", function (choice) {
        if (choice == 1) {
            entNewPass(i)
            return
        }
        if (choice == 2) {
           /* rl.question("\nPlease confirm if you would like to delete your account by entering either 'Yes' or 'No'\n", function(choice){
                if (choice == )
            })*/
            deleteAcc(i)
            return
        }
        if (choice == 3) {
            console.log("\nYou have been successfully logged out!\n")
            mMenu()
            return
        }
        console.log("\nThe option you have selected does not exist, please enter a single digit from the following options -\n")
        options(i)
    })
}
mMenu()
