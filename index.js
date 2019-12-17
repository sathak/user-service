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
app.all('*', function(req, res, next) {
     var origin = req.get('origin'); 
     res.header('Access-Control-Allow-Origin', origin);
     res.header("Access-Control-Allow-Headers", "X-Requested-With");
     res.header('Access-Control-Allow-Headers', 'Content-Type');
 res.header('Access-Control-Allow-Methods: POST,PUT,GET,DELETE');
     next();
});
    
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());


    
    routes(app);
    

    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
