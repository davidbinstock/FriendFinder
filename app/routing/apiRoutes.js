
module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.send("Hello there!! This is our 'Friends' page! Content pending!");
    });
    
    app.post("/api/friends", function(req, res){
        console.log("POST route has been accessed")
        res.send("api POST route");
        
    });

}