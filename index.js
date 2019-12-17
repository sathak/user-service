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
app.use(function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     res.header('Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
     next();
});
    
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());


    
    routes(app);
    

    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
