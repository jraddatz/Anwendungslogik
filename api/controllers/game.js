var mongoose = require('mongoose');
/*
	Returns all games from database ludodb
*/
function getGames(request, response) {
	mongoose.model('game').find(function(err, games) {
    response.send(games);
	});
}

function getGame(request, response) {
	let gameId = request.swagger.params.gameid.value;
	mongoose.model('game').findById(gameId,function(err, games) {
    response.send(games);
	});
}

module.exports = {
  getGames: getGames,
  getGame: getGame
};