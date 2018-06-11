var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema(
{
    user_id:  {
    	type : Schema.ObjectId,
    	ref: 'user'
    },
    max_player: Number,
    min_player: { type: Number, default: 1},
    name: String,
    descripion: String
});
module.export = mongoose.model('game', gameSchema);

