var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var diceSchema = new Schema({
	value_list : [Number]
});

var Dice = mongoose.model('dice', diceSchema);