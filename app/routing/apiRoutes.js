// ===========================================================================
// DEPENDENCIES
// ===========================================================================
var path = require("path");
var fs = require("fs")

// ===========================================================================
// ROUTES
// ===========================================================================
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        // pull existing data
        var myFriends = fs.readFileSync(path.join(__dirname,"../data/friends.js"),"utf8");
        myFriends = JSON.parse(myFriends);
        res.json(myFriends);
    });
    
    app.post("/api/friends", function(req, res){
        var answers = req.body;
        // console.log(answers);
        console.log("POST route has been accessed")
        
        //create new friend
        var newFriend = {
            "name": answers.fname,
            "photo": answers.image,
            "scores": [
                parseInt(answers.q1),
                parseInt(answers.q2),
                parseInt(answers.q3),
                parseInt(answers.q4),
                parseInt(answers.q5),
                parseInt(answers.q6),
                parseInt(answers.q7),
                parseInt(answers.q8),
                parseInt(answers.q9),
                parseInt(answers.q10)
            ]
        }
        // pull existing data
        var myFriends = fs.readFileSync(path.join(__dirname,"../data/friends.js"),"utf8");
        myFriends = JSON.parse(myFriends);

        //Find Match
        friendDiff = myFriends.map(function(val){
            var diff = 0;
            for(var i=0; i < val.scores.length; i++){
                diff += Math.abs(val.scores[i]-newFriend.scores[i])
            }
            return diff;
        });
        console.log(friendDiff);
        var matchScore = Math.min.apply(null,friendDiff);
        console.log("match score", matchScore);
        var matchIndex = friendDiff.findIndex(function(val){
            return val === matchScore;
        });
        console.log("match index", matchIndex);
        var match = myFriends[matchIndex];
        
        // Return Match Info
        res.json(match);
        
        
        //ADD New Person to Friends Data
        // push friend to myFriends
        myFriends.push(newFriend);
        console.log(myFriends);
        // re-write myFriends.js
        fs.writeFile(path.join(__dirname,"../data/friends.js"), JSON.stringify(myFriends),function(error){
            if(error){
                return console.log(error);
            }
            console.log("new friend added!")
        })

        



        
    });

}