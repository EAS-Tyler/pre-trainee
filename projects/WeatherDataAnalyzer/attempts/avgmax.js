var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weatherdata.json"))
// Calculate and display the average maximum temperature for the provided dates.

var sumMaxT = 0
for (var i = 0; i < obj.data.length; i++) {
    var maxT = obj.data[i].temperature_max
    var sumMaxT = sumMaxT + maxT                  // tidy
}
var avgMaxT = sumMaxT / obj.data.length
console.log("The average maximum temperature for the selected dates = " + avgMaxT.toFixed(1) + "ºF")

