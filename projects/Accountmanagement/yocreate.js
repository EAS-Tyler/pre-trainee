var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/Accountmanagement/user_accounts.json'));

var theUsers = obj.users

console.log(obj.users.length)
//make a user registration system where users can create accounts by providing a username and password. Ensure that usernames are unique.
//Implement a login system where users can log in using their username and password.

//Once logged in, allow users to change their password.
//Implement a logout system that logs the user out and ends the session.


// allow people to create objects, then push that object onto array
//provide uname and password

/* function addUsers(use, pass){
    theUsers.push(use, pass)
    return obj
} */
//console.log(addUsers(ty, cass))
// Implement a user registration system where users can create accounts by providing a username and password. Ensure that usernames are unique.
// push()