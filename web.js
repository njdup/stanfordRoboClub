var express = require('express');
var fs = require('fs');



var app = express();
var filename = "home.html";
var content = fs.readFileSync(filename);
var converted = content.toString();

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/bootstrap/js"));

app.get('/', function(request, response){
       	response.send(converted);
    });

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Listening on " + port);
    });
