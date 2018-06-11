var mongoose = require('mongoose');

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

/*
	Returns all games from database ludodb
*/
function getGames(request, response) {
	mongoose.model('game').find(function(err, games) {
    response.send(games);
	});
}

module.exports = {
  getGames: getGames
};