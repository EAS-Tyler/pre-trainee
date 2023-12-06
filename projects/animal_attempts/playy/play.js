 function howold(val) {
    if (val > 50) {
    return "yes"
}
    return "no" }
console.log(howold(70))


function size(num){
    if (num < 5) {
        return "tiny"
    }
   else if (num < 10) {
        return "small"
    }
   else if (num < 15) {
        return "medium"
    }
    else if (num < 20) {
        return "large"
    }
   else {
        return "large"
    }
}
console.log(size(12)) 


/* function chainToSwitch(val) {
    var answer = "";

    switch(val) {
         case "bob": 
            answer = "marley";
            break;
        case 42:
            answer = "the answer";
            break;
        case 1: 
            answer = "there is no 1";
            break;
        case 99:
            answer = "missed";
            break;
        case 7:
            answer = "ate nine ";
            break;
    }
    return answer
}
console.log(chainToSwitch("bob"))
*/

// while loop
var myArray = [] 
var i = 0
while(i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)


//for loop

var myArray = []
for(var i = 1; i < 6; i++) {
    myArray.push(i)
}
console.log(myArray)
*/

//for, counting down
/*
var myArray = []
for(var i = 8; i > 0; i --) {
    myArray.push(i)
}
console.log(myArray)
*/ 

// random number within a range 
/*
function myRange(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
var yolo = myRange(5, 10)
console.log(yolo)
*/





