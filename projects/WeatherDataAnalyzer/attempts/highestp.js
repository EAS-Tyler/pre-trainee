var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weatherdata.json"))
var allP = []
for (var i = 0; i < obj.data.length; i++) {
    allP.push(obj.data[i].precipitation)
}
var maxP = Math.max(...allP)
for (var i = 0; i < obj.data.length; i++) {
    if (obj.data[i].precipitation == maxP) {
        var maxDate = obj.data[i].date
    }
}
console.log("The greatest amount of percipitation was " + maxP + " mm, which occured on " + maxDate)

