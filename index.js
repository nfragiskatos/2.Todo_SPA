var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"))

app.get("/", function(req, res) {
   res.sendFile("index.html"); 
});

app.use("/api/todos", todoRoutes);




app.listen(process.env.PORT, function() {
    console.log("App is running on port " + process.env.PORT);
});