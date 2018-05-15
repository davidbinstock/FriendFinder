
module.exports = function(app){

    app.get("/survey", function(req, res){
        res.send("Hello! Welcome to our survey page! Content pending!");
    });
    
    app.get("*", function(req, res){
        res.send("WELCOME TO OUR HOME PAGE!! Content pending!");
    });

}