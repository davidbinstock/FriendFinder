// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ===========================================================================
// EXPRESS CONFIGURATION
// ===========================================================================
// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
// Set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//============================================================================
// Routing
//============================================================================
require("./app/routing/apiRoutes")(app);
// this needs to be after the "api routes" because it has a default catchall route
require("./app/routing/htmlRoutes")(app);

// ===========================================================================
// LISTENER
// ===========================================================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});