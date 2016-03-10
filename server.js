var fs = require("fs");
var host = "127.0.0.1";
var port = 8080;
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(__dirname + "/public")); // use static files in ROOT/public folder

app.get('/showroom',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/images", function(request, res){
	var images = { "images": ['/assets/images/australia/australian-bush.jpg', 
	'/assets/images/australia/brisbane-river-sunset.jpg', 
	'/assets/images/australia/byron-bay.jpg', 
	'/assets/images/australia/nudgee-beach-sunset.jpg', 
	'/assets/images/australia/australian-bush.jpg', 
	'/assets/images/australia/umbrella-palms.jpg',
	'/assets/images/cambodia/angkor-buddha.jpg',
	'/assets/images/cambodia/angkor-watt.jpg',
	'/assets/images/cambodia/phnom-penh.jpg',
	'/assets/images/germany-austria/across-the-valley.jpg',
	'/assets/images/germany-austria/alpspitze.jpg',
	'/assets/images/germany-austria/austria-ski.jpg',
	'/assets/images/germany-austria/kleiner-waxenstein.jpg',
	'/assets/images/germany-austria/kramerspitz-false-summit.jpg',
	'/assets/images/germany-austria/kramerspitz-roots.jpg',
	'/assets/images/germany-austria/kramerspitz.jpg',
	'/assets/images/germany-austria/mittenwald-hoehenweg.jpg',
	'/assets/images/germany-austria/zugspitze.jpg',
	'/assets/images/germany-austria/kramerspitz.jpg',
	'/assets/images/germany-austria/mittenwald-hoehenweg.jpg'
	]};
    res.json(images);
});

console.log('localhst:',port);

app.listen(port, host);