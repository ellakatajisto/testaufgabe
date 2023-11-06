const express = require("express"),
    app = express(),
    layouts = require('express-ejs-layouts'),
    path = require("path");

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/valid_app", {useNewUrlParser:true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);

//set view engine to use layouts and ejs
app.set("view engine", "ejs");
app.use(layouts);

//tell express to use URL-encoded data (to analyze request bodies)
//a method to recognize incoming request object as string or arrays
app.use(
    express.urlencoded({
        extended: false
    })
);
//a method to recognize the incoming request as JSON object
app.use(express.json());

//defines the folder for static files (css frontend)
app.use(express.static(path.join(__dirname, 'public')));

//use router
app.use(require('./router'));

app.listen(app.get("port"), () => {
    console.log("server running at localhost!")
});