const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    let message = "welcome to Easynotes application" +
        "take notes quikly. organise and keep track of it"
    res.json({ "message": message });

});


app.listen(3000, () => {
    console.log("server is listening on port 3000");

});