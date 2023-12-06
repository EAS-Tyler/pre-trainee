var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weatherdata.json"))
// title
var title = "Weather Data for New York:\n\n"
// avg max t
var sumMaxT = 0
for (var i = 0; i < obj.data.length; i++) {
    var maxT = obj.data[i].temperature_max
    sumMaxT += maxT
}
var avgMaxT = sumMaxT / obj.data.length
var avgMaxTStr = "Average Maximum Temperature: " + avgMaxT.toFixed(1) + "ºF\n"
// avg min t
var sumMinT = 0
for (var i = 0; i < obj.data.length; i++) {
    var minT = obj.data[i].temperature_min
    sumMinT += minT
}
var avgMinT = sumMinT / obj.data.length
var avgMinTStr = "Average Minimum Temperature: " + avgMinT.toFixed(1) + "ºF\n"
// highest p
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
var pStr = "Day with Highest Precipitation: " + maxDate + " (" + maxP + " inches)\n"
var outputStr = title + avgMaxTStr + avgMinTStr + pStr
// needs to be stored as an object
//var outputObj = JSON.stringify(outputStr, null, 2)
fs.writeFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weather_summary.json", outputStr)
