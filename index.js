'use strict';
 var express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      User = require('./models/user'),
      bodyParser = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://admin:admin@cluster0-onqm5.gcp.mongodb.net/users?retryWrites=true&w=majority');
    var routes = require('./helper/route');

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    routes(app);
    

    app.listen(port);

    //console.log('Worker '+process.pid+' started');
    console.log('RESTful API server started on: ' + port);
