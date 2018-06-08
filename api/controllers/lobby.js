let LOBBYS = new Map();

LOBBYS.set(
	0,
	{
		id: 0,
		name: 'Super Lobby',
		currentPlayers: 3,
		maxPlayers: 7,
		password: true
	}
);

LOBBYS.set(
	1,
	{
		id: 1,
		name: 'Tims Lobby',
		currentPlayers: 4,
		maxPlayers: 4,
		password: false
	}
);

function getLobbys(request, response) {
  response.json(Array.from(LOBBYS.values()));
}

function createLobby(request, response) {
  response.json({id: 3});
}

function addPlayerToLobby(request, response) {
  response.json({message: "Spieler erfolgreich zu lobby hinzugefügt"});
}

function removePlayer(request, response) {
  response.json({message: "Spieler erfolgreich aus lobby entfernt"});
}

module.exports = {
  getLobbys: getLobbys,
  createLobby: createLobby,
  addPlayerToLobby: addPlayerToLobby,
  removePlayer: removePlayer,
};