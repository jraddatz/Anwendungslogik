/*
var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var app = express();

// load all model files
fs.readdirSync(__dirname+ '/models').forEach(function(filename) {
	if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename);
});

// Database Connection
mongoose.connect('mongodb://localhost/ludodb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});
*/


/*
	Returns all games from database ludodb
*/
function getGames(request, response) {
	/*mongoose.model('game').find(function(err, games) {
		console.log(games);
	});*/
	response.json("Hallo Welt!");
}

module.exports = {
  getGames: getGames
};