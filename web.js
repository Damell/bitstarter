var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var welcome_text = fs.readFileSync("index.html", "utf-8");

app.get('/', function(request, response) {
  response.send(welcome_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
