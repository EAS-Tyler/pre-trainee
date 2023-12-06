// easiest way to read a json file, is to pass it to the require funciton
require('./file.json')
// returns back json data as a js object
//caches result - even if file is changed since required it, will always get same cached result from the first time you required it

fs.readFile("./file.json")
//asyncronous funtion that will always read current state of the file. this function will return the sting content of the file, therefore 
// you must parse data
//- before doing that you must require the fs module 
const fs = require("fs")

// there is also syncronous readfile
fs.readFileSync

// if data is given as string, cant access it. must parse string into js object

// A helper function is a function that performs part of the computation of another function - e.g .parse
// JSON.parse is a syncronous function 


// need to stringify any data im going to write into json file
// to write
fs.writeFile("/name of file writing to")