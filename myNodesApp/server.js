const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig=require('./config/database.config.js');
const mongoose= require('mongoose');

mongoose.Promise=global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("Successfully connected to database"); 
}).catch(err => {
    console.log('could not connect to the database. Exiting now...',err);
    process.exit();
});

app.get('/HOME', (req, res) => {
    let message = "welcome to Easynotes application" +
        "take notes quikly. organise and keep track of it"
    res.json({ "message": message });

});


app.listen(3000, () => {
    console.log("server is listening on port 3000");

});