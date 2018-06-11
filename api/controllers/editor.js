function createGame(request, response) {
  response.json({id: 3});
}

function updateGame(request, response) {
  response.json({id: 4});
}


module.exports = {
	createGame: createGame,
	updateGame: updateGame,
};