const express = require("express");

const bodyParser = require('body-parser');

const app = express();

var userIsAuth = false;

app.use(bodyParser.urlencoded({ extended: false }));

function passwordCheck(req, res, next) {
  const pass = req.body["password"];
  // or
  // const pass = req.body.password;
  if (pass === "Donut") {
    userISAuth = true;
  }
  next();
}

app.use(passwordCheck);

app.get("/pass", function(req, res) {
  res.sendFile(__dirname + "/password.html");
});

app.post("/check", function(req, res) {
  if (userIsAuth) {
    res.sendFile(__dirname + "/secret.html");
  }
  else {
    res.sendFile(__dirname + "/password.html");
  }
});

app.post("/logout", function(req, res) {
  userIsAuth = false;
  res.sendFile(__dirname + "/password.html");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/calci.html");
  //console.log(__dirname);
});

app.post("/", function(req, res) {
  //res.send("We have received your post request");
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("This is your magic result: " + result);
});

app.get("/portfolio", function(req, res) {
  res.sendFile(__dirname + "/index.html");
  //console.log(__dirname);
});

app.get("/about", function(req, res) {
  res.send("This is Anvita Kumar.");
});

app.listen(3000, function() {
  console.log("Server has started on port 3000.");
});