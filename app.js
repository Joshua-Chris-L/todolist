// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

//require locally created function called date.js
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
//tell app to serve up css locally
app.use(express.static("ppublic"));

//Tell app to use ejs
app.get("/", function(req, res){
//Run the function that is bound to our date module.getDate()
const day = date.getDate();
res.render("list", {Listtitle: day, newListItems: items});
});

app.get("/work", function(req, res){
res.render("list", {Listtitle: "Work List", newListItems: workItems});
});

app.post("/", function(req, res){
console.log(req.body);
const item =  req.body.newItem;
if (req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");
}else{items.push(item);
res.redirect("/");
}
});

app.get("/about", function(req, res){
res.render("about");
});

// app.post("/work", function(req, res){
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.listen(3000, function(){
  console.log("server started on port 3000");
});
