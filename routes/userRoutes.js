var express = require('express');

var routes = function(User){
    var userRouter = express.Router();
    
    var userController = require('../controllers/userController')(User);

    userRouter.route('/')
        .post(userController.post)
        .get(userController.get);
        
    userRouter.use('/:userId', function(req,res,next){
        userController.userExist(req, res, next);
    });

    userRouter.route('/:userId')
        .get(function(req, res){
            res.json(req.user);
        })
        .put(userController.put)
        .patch(userController.patch)
        .delete(userController.delete);

    return userRouter;
};

module.exports = routes;