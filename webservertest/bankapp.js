const express = require('express')
const app = express()
const port = 3000
// nodemon
app.use(express.static('public'))

var fs = require("fs")
var obj = JSON.parse(fs.readFileSync("/Users/trainee/Desktop/webservertest/accounts.json"))

app.get('/ty', (req, res) => {
    res.send('Hello bank!')
  })

  app.get('/user/:user', (req, res) => {
    //console.log(req.query)
    // if(req.query.name=="tyler"){
    //     res.send("go away")
    // }else{
    //       res.send("welcome")

    // }
    //test 
            //    res.send("welcome " + req.params.user)
               res.send(obj.accounts[req.params.user])


})


app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })

