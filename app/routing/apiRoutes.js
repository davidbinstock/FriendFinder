// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var path = require("path");
var myFriends = require("../data/friends.js");
var fs = require("fs")

// ===========================================================================
// ROUTES
// ===========================================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(myFriends);
    });
    
    app.post("/api/friends", function(req, res){
        var answers = req.body;
        console.log("POST route has been accessed")
        res.send("api POST route");
        console.log(answers);
        
        //create new friend
        var newFriend = {
            "name": answers.fname,
            "photo": answers.image,
            "scores": [
                answers.q1,
                answers.q2,
                answers.q3,
                answers.q4,
                answers.q5,
                answers.q6,
                answers.q7,
                answers.q8,
                answers.q9,
                answers.q10
            ]
        }
        // push friend to myFriends
        myFriends.push(newFriend);
        // re-write myFriends.js
        fs.writeFile("./app/data/friends.js", JSON.stringify(myFriends),function(error){
            if(error){
                return console.log(error);
            }
            console.log("new firend added!")
        })


        
    });

}