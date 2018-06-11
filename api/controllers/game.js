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


/*
	Returns all games from database ludodb
*/
function getGames(request, response) {
	mongoose.model('game').find(function(err, games) {
		response.json(game)
	});
}


var data = [
  {
    "id": 1,
    "name": "labore in",
    "description": "eiusmod enim Lorem deserunt",
    "maxPlayers": 6,
    "minPlayers": 2
  },
  {
    "id": 2,
    "name": "lorem ipsum",
    "description": "bla bla bla",
    "maxPlayers": 8,
    "minPlayers": 1
  },
]

module.exports = {
  getGames: getGames
};