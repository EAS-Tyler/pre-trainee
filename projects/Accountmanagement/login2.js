var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/user_accounts.json'));

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function loginn() {
    rl.question("\nEnter your Username:\n", function (userNa) {
        for (var i = 0; i < obj.users.length; i++) {
            if (userNa == obj.users[i].username) {
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

function options(i) {
    rl.question("1. Change Password\n2. Log out\n\nPlease enter your choice:\n", function (choice) {
        if (choice == 1) {
            entNewPass()
            function entNewPass() {
                rl.question("\nEnter your new password:\n", function (pass) {
                    rl.question("Please confirm your password:\n", function (confPass) {
                        if (pass !== confPass) {
                            console.log("\nYour passwords do not match, please try again\n")
                            return entNewPass()
                        }
                        if (pass == confPass) {
                            console.log("\nPassword successfully changed!\n")
                            obj.users[i].password = pass ///
                            return options() // return to options
                        }
                    })
                })
            }
        }
        if (choice == 2) {
            console.log("\nYou have been successfully logged out, goodbye!\n")
            process.exit(0);

        }
        return;
    }
    )
}

function enterpw(i) {
    rl.question("\nEnter your password:\n", function (pass) {

        if (pass !== obj.users[i].password) {
            console.log("\nIncorrect password")
            return enterpw(i)
        }
        if (pass == obj.users[i].password) {
            console.log("\nLogin successful")
            return options(i)

        }
    })
}
// write back object to json file



loginn()