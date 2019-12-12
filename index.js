'use strict';
 var express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      User = require('./models/user'),
      bodyParser = require('body-parser');
      var config = require('./config/config');

    mongoose.Promise = global.Promise;
    mongoose.connect(config["Mongo-URL"]);
    var routes = require('./helper/route');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    routes(app);
    

    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
