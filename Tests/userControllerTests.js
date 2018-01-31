var should = require('should'),
    sinon = require('sinon');

describe('User Controller Test', function(){
    describe('post', function(){
        it('Should not allow a empty first_name', function(){
            var Users = function(user){this.save = function(){};};

            var req = {
                body: {
                    email:'TestEmail@gmail.com'
                }
            };

            var res = {
                status: sinon.spy(),
                send: sinon.spy()
            };

            var userController = require('../Controllers/userController')(Users);

            userController.post(req, res);

            res.status.calledWith(400).should.equal(true, 'Bad status ' + res.status.args[0][0]);
            res.send.calledWith('first_name require').should.equal(true);
        });
    });
});