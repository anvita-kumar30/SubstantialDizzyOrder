const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/about", function(req, res) {
  res.send("This is Anvita Kumar.");
});

app.listen(3000, function() {
  console.log("Server has started on port 3000.");
});