var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

var images = ["http://bit.ly/docker-cat-1", "http://bit.ly/docker-cat-2", "http://bit.ly/docker-cat-3"];

app.get("/", function(req, res) {
    var url = images[Math.floor(Math.random() * 3)];
    res.render("index", {url: url});
});

var port = 5000 || process.env.PORT;
app.listen(port, function() {
    console.log(`Server started.....\nVisit http://localhost:${port}`);
});