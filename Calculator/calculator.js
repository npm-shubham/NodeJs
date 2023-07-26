const express = require('express');
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res) {
    //console.log(req.body.n1)
    //req.body.n1 gives n1
    var n1 = Number(req.body.n1) 
    var n2 = Number(req.body.n2)
    var result = n1+n2

    res.send("The result is "+result)
})

app.get('/bmiCalc', function(req,res) {
    res.sendFile(__dirname, '/bmiCalc.html')
})

app.post('/bmiCalc', function(req, res) {
    var n1 = parseFloat(req.body.height)
    var n2 = parseFloat(req.body.weight)

    var result = n2/(n1*n1)
    res.send("The BMI is "+result)
})

app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
})