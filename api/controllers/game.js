var data = {
	id: 1,
	name: "Dario"
}

function getGames(request, response) {
	response.json(data);
}

module.exports = {
  getGames: getGames
};