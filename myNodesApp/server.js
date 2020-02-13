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

//define a simple route
app.get('/', (req, res) => {
    let message = "welcome to Easy notes application" +
        "take notes quickly. organize and keep track of it"
    res.json({ "message": message });

});

//setting notes routes to express app
require('./app/routes/notes.routes.js')(app);

//listen for request
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});