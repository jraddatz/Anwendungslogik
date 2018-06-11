var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var game_dice_Schema = new Schema(
  {
    game_id:  {
    	type : Schema.ObjectId,
    	ref: 'game'
    },
    dice_id:  {
      type : Schema.ObjectId,
      ref: 'dice'
    },
    x_pos: Number,
    y_pos: Number

  });
 var Game_Dice = mongoose.model('game_dice', game_dice_Schema);