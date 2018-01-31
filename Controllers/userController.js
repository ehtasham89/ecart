var userController = function(User) {
    var post = function(req, res){
        var newUser = new User(req.body);
        
        if(!req.body.first_name) {
            res.status(400);
            res.send('first_name require');
        } else {
            newUser.save();

            res.status(201);
            res.send(newUser);
        }
    },
    get = function(req, res){
        User.find(function(err, users){
            if (err)
                console.log(err);
            else
                res.json(users);
        });
    },
    put = function(req, res) {
        req.user.first_name = req.body.first_name;
        req.user.last_name = req.body.last_name;
        req.user.email = req.body.email;
        req.user.type = req.body.type;
        req.user.save(function(err){
            if (err)
                res.status(500).send(err);
            else
                res.json(req.user);
        });
    },
    patch = function(req, res){
        if (req.body._id)
            delete req.body._id;
        
        for (var p in req.body) {
            req.user[p] = req.body[p];
        }

        req.user.save(function(err){
            if (err)
                res.status(500).send(err);
            else
                res.json(req.user);
        });
    },
    deleteUser = function(req, res){
        req.user.remove(function(err){
            if (err)
                res.status(500).send(err);
            else
                res.status(204).send('User removed.');
        });
    },
    userExist = function(req, res, next){
        User.findById(req.params.userId, function(err, user){
            if (err) {
                res.status(500).send(err);
            } else if(user) {
                req.user = user;
                next();
            } else {
                res.status(404).send('No user found.');
            }
        });
    };

    return {
        post: post,
        get: get,
        put: put,
        patch: patch,
        delete: deleteUser,
        userExist: userExist
    };
};

module.exports = userController;