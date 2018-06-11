var data = {
	id: 1
}

function getGames(request, response) {
	response.json(data);
}

module.exports = {
  getGames: getGames
};