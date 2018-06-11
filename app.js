'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose = require('mongoose');
var fs = require('fs');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);
  var port = process.env.PORT || 3000;

  // load all model files
	fs.readdirSync(__dirname+ '/api/models').forEach(function(filename) {
		if(~filename.indexOf('.js')) require(__dirname + '/api/models/' + filename);
	});

  mongoose.connect('mongodb://localhost/ludodb');
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function(){
  	app.listen(port);
  });

  if (swaggerExpress.runner.swagger.paths['/lobby']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/lobby');
  }
});
