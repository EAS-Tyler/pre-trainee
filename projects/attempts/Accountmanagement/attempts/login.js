var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/user_accounts.json'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function loginn() {
    rl.question("Enter your Username:", function (userNa) {
        for (var i = 0; i < obj.users.length; i++) {
            if (userNa !== obj.users[i].username) {
                console.log("This username does not exist, please try again:")
                return loginn()
            }
            if (userNa == obj.users[i].username) {
                passw1()
                function passw1() {
                    rl.question("Enter your password", function (pass) {
                        if (pass !== obj.users[i].password) {
                            console.log("Incorrect password")
                            return passw1
                        }
                        if (pass == obj.users[i].password) {
                            console.log("Login successful")
                            rl.question("1. Change Password\n2. Log out\nPlease enter your choice: ", function (choice) {
                                if (choice == 1) {
                                    entNewPass()
                                    function entNewPass() {
                                        rl.question("Enter your new password:", function (pass) {
                                            rl.question("Please confirm your password:", function (confPass) {
                                                if (pass !== confPass) {
                                                    console.log("Your passwords do not match, please try again")
                                                    return entNewPass()
                                                }
                                                if (pass == confPass) {
                                                    console.log("Password successfully changed")
                                                    obj.users[i].password = pass
                                                }
                                            })
                                        })
                                    }
                                    if (choice == 2) {
                                        console.log("You have been successfully logged out, goodbye!")
                                        process.exit(0);
                                    }
                                }}) 
                        }
                    })
                }
            }
        }
    })
}
loginn()