var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/Users/trainee/Desktop/try/animaldata.json'));
// var animals = obj.animals
var animals = obj.animals

var carrot = searchAni()
 
function searchAni(choice) {
    var answer = "";
    switch(choice){
        case 1:
            answer = animals[1];
            break;
        case 2:
            answer = animals[2];
            break;


    
    }
}

return answer