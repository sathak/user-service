'use strict';
 var express = require('express'),
     swaggerUi = require('swagger-ui-express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      User = require('./models/user'),
      bodyParser = require('body-parser');
    
    var config = require('./config/config');
   
 
    const swaggerSpec = require('./config/swagger.json');

    
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

   // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
