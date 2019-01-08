var express = require("express");

var app = express();

var MongoClient = require("mongodb").MongoClient;
var axios = require("axios")
var db;
MongoClient.connect('mongodb://localhost:27017/test',
    function (err, _db) {
        if (err)
            console.log("Erreur de connexion à mongodb");
        else {
            console.log("Yeah! Connected!");
            db = _db;
        }
    }
);

app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/sloubi", function (req, res) {
    res.end("<body><p style=\"background-color:red\"> lol ! </p>");
});


app.get("/note/readAll", (req, res) => {
    db.collection("note").find().toArray(function (err, note) {
        res.json({"note": note});
    })
});
app.post("/note/create/:value", (req, res) => {
    var json = [{"Text": req.params.value}];
    console.log(json)
    db.collection("note").insertMany(json, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);

    });
});
app.get("/note/update/:id/:value", (req, res) => {
    var query ={"_id": req.params.id};
    var value =  {$set: {Text: req.params.value}};
    db.collection("note").updateOne(query, value, function (err, messages) {

    })
});
app.get("/note/delet", (req, res) => {
    db.collection("note").find().toArray(function (err, messages) {
        res.json({message: messages});
    })
});

app.listen(4564);

console.log("running...");