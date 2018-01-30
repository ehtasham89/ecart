var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var userRouter = express.Router();

userRouter.route('/login')
        .get(function(req, res){
            res.json({hello:'this is my api'});
        });

app.use('/api', userRouter);

app.get('/', function(req, res){
    res.send('welcome to my API!');
});

app.listen(port, function(){
    console.log('Gulp is running on PORT: ' + port); 
});