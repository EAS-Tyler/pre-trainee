var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weatherdata.json"))
// avg max t
var sumMaxT = 0
for (var i = 0; i < obj.data.length; i++) {
    var maxT = obj.data[i].temperature_max
    sumMaxT += maxT
}
var avgMaxT = (sumMaxT / obj.data.length).toFixed(1) + "ºF"
// avg min t
var sumMinT = 0
for (var i = 0; i < obj.data.length; i++) {
    var minT = obj.data[i].temperature_min
    sumMinT += minT
}
var avgMinT = (sumMinT / obj.data.length).toFixed(1) + "ºF"
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
var pStr = maxDate + " (" + maxP + " inches)"
var data = {
    "Weather Data for New York":
    {
        "Average Maximum Temperature": avgMaxT,
        "Average Minimum Temperature": avgMinT,
        "Day with Highest Precipitation": pStr
    }
}
var outputObj = JSON.stringify(data, null, 2)
fs.writeFileSync("/Users/trainee/Desktop/WeatherDataAnalyzer/weather_summary2.json", outputObj)





