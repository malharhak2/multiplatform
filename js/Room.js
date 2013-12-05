var config = require('./config.js');
var Room = function (id) {
	this.id = id;
	this.players = [];
	this.maxPlayers = config.maxPlayersPerRoom;
}
module.exports = Room;