//code to sample.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is hello world')
    console.log("this is get function")
})

app.listen(6969, () => {
    console.log("This is listen function @ http://localhost:6969")
})

