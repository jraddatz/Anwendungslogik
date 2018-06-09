let LOBBYS = new Map();
let PLAYERSONE = new Map();
let PLAYERSTWO = new Map();

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

PLAYERSONE.set(
	0,
	{
		id: 0,
		name:'Dieter',
		amazonecho: true,
		ping: 130
	}
);

PLAYERSONE.set(
	1,
	{
		id: 1,
		name: 'Horst',
		amazonecho: true,
		ping: 130
	}
);

PLAYERSTWO.set(
	2,
	{
		id: 2,
		name: 'Peter',
		amazonecho: false,
		ping: 130
	}
);

PLAYERSTWO.set(
	3,
	{
		id: 3,
		name: 'theLegend27',
		amazonecho: true,
		ping: 130
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

function removePlayer(request, response) {
  response.json({message: "Spieler erfolgreich aus lobby entfernt"});
}

function playersInLobby(request, response) {
  const lobbyid = request.swagger.params.lobbyid.value;
  if(lobbyid === 0) {
  	response.json(Array.from(PLAYERSONE.values()));
  } else if(lobbyid === 1) {
  	response.json(Array.from(PLAYERSTWO.values()));
  }
}

function kickPlayer(request, response) {
  response.json({id: 3});
}

function getGameMaster(request, response) {
  response.json({message: "Spieler erfolgreich als Spieler eingesetzt"});
}

function invitePlayers(request, response) {
	response.json({message: "Spieler erfolgreich in die Lobby eingeladen"});
}

module.exports = {
  getLobbys: getLobbys,
  createLobby: createLobby,
  addPlayerToLobby: addPlayerToLobby,
  removePlayer: removePlayer,
  playersInLobby: playersInLobby,
  kickPlayer: kickPlayer,
  getGameMaster: getGameMaster,
  invitePlayers: invitePlayers,
};