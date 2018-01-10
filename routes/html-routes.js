// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
app.get("/general", function(req, res) {
  // Handlebars 
  res.render("general");
});

app.get("/experience", function(req, res) {
  // Handlebars 
  res.render("experience");
});
};