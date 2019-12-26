'use strict';
module.exports = function (app) {
    
    var userapi = require('../controller/userapi');
    var mongoose = require('mongoose');
    
    var User = mongoose.model('User');

    
    //// User Routes
    app.route('/api/user')
    /**
 * @swagger
 * /api/user:
 *   get:
 *     summary: List all the users
 *     description: Returns a list of all the Users, optionally sorted
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: List of Users
 *         schema:
 *           type: object
 */

      .get(userapi.list_all_user)
      .post(userapi.create_a_user);


    app.route('/api/user/:userId')
      .get(userapi.get_a_user)
      .put(userapi.update_a_user)
      .delete(userapi.delete_a_user);

    
};
