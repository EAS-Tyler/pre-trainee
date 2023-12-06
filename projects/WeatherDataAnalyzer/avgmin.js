var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weatherdata.json"))

var sumMinT = 0

for (var i = 0; i < obj.data.length; i++) {
    var minT = obj.data[i].temperature_min
    var sumMinT = sumMinT + minT                  // tidy
}
var avgMinT = sumMinT / obj.data.length
console.log("The average minimum temperature for the selected dates = " + avgMinT.toFixed(1) + "ºF")

