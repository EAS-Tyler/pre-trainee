const express = require('express')
const bodyParser=require('body-parser')
const { rootCertificates } = require('tls')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/user/:user', (req, res) => {
    //console.log(req.query)
    // if(req.query.name=="tyler"){
    //     res.send("go away")
    // }else{
    //       res.send("welcome")

    // }
    //test
               res.send("welcome " + req.params.user)

})

app.post('/signup', (req, res) => {
    console.log("signup user", req.body.name)
    res.send('Got a POST request')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
