// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var path = require("path");
var myFriends = require("../data/friends.js");

// ===========================================================================
// ROUTES
// ===========================================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(myFriends);
    });
    
    app.post("/api/friends", function(req, res){
        console.log("POST route has been accessed")
        res.send("api POST route");
        console.log(req.body);  
    });

}