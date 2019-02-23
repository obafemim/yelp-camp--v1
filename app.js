const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
  {name: "Lake Hylia", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"},
  {name: "Korok Forest", image: "https://images.unsplash.com/photo-1498855926480-d98e83099315"},
  {name: "Mount Nabooru", image: "https://images.unsplash.com/photo-1485343034225-9e5b5cb88c6b"}
]

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  // get data from form and add to campgrounds array.
  let name = req.body.name
  let image = req.body.image
  let newCampground = {name: name, image: image}
  campgrounds.push(newCampground)
  // redirect back to campgrounds page.
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.listen(3000, function() {
  console.log("The YelpCamp server has started!")
});
