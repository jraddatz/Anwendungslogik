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
)

LOBBYS.set(
	1,
	{
		id: 1,
		name: 'Tims Lobby',
		currentPlayers: 4,
		maxPlayers: 4,
		password: false
	}
)

function getLobbys(request, response) {
	response.json(Array.from(LOBBYS.values()));
}

module.export = {
	getLobbys: getLobbys,
};