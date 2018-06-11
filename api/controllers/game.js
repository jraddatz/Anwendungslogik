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

function getGames(request, response) {
	response.json(data);
}

module.exports = {
  getGames: getGames
};