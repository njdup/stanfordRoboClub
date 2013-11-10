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

var aboutUsContent = fs.readFileSync("aboutUs.html");
var aboutUsConverted = aboutUsContent.toString();

app.get('/aboutus', function(request, response){
	response.send(aboutUsConverted);
    });


var membershipContent =fs.readFileSync("membership.html");
var memberConverted = membershipContent.toString();

app.get('/membership', function(request, response){
        response.send(memberConverted);
    });

var outreachContent = fs.readFileSync("Outreach.html");
var outreachConverted = outreachContent.toString();

app.get('/outreach', function(request, response){
	response.send(outreachConverted);
    });

var projectsContent = fs.readFileSync("projects.html");
var projectsConverted = projectsContent.toString();

app.get('/projects', function(request, response){
	response.send(projectsConverted);
    });

var sponsorContent = fs.readFileSync("sponsorus.html").toString();
app.get('/sponsorus', function(request, response){
	response.send(sponsorContent);
    });

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Listening on " + port);
    });







