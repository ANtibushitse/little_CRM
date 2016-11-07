var express = require("express"); 
var app = express(); 
var bodyParser= require("body-parser");
var fs = require("fs"); 

app.use(express.static("public"));
app.use(bodyParser.json()); 


app.get("/", function(req, res){
	res.send("Hello World!"); 

}); 
app.listen(4533, function(){
	console.log("4533 est ecouté")
}); 
