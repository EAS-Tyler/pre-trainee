// npm install md5 - bcrypt better? more secure and // salt
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/hashing/hashedpass1.json"))

var md5 = require('md5');
var userN = "tyler"
var password = "tyspass"
var hashedPass = md5(password)

var user = {
    "username": userN,
    "password": hashedPass
}
var userStr = JSON.stringify(user, null, 2)

fs.writeFileSync("/Users/trainee/Desktop/hashing/hashedpass1.json", userStr)


rl.question("please enter your pass: ", function(pass){
    if (md5(pass) == obj.password){
        console.log("correct")
    } else {
        console.log("nope")
    }
    rl.close()
})

