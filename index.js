var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hello"); 
});

app.listen(process.env.PORT, function() {
    console.log("App is running on port " + process.env.PORT);
});