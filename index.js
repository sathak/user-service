'use strict';
 var express = require('express'),
      expressOasGenerator = require('express-oas-generator'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      User = require('./models/user'),
      bodyParser = require('body-parser');
    
    var config = require('./config/config');
    expressOasGenerator.init(app, function(spec) {
     console.log(spec);
  _.set(spec, 'info.title', 'User');
  _.set(spec, "paths['/path'].get.parameters[0].example", 2);
  return spec;
});
    mongoose.Promise = global.Promise;
    mongoose.connect(config["Mongo-URL"]);
    var routes = require('./helper/route');
    app.all('*', function(req, res, next) {
         res.header("Access-Control-Allow-Origin", '*');
         res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
         res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
         next();
    });
    
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());


    
    routes(app);

    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
