var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/ecart', {
    //"auth": { "authSource": "admin" },
    //"user": "username",
    //"pass": "password",
    //"useMongoClient": true
});

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('view engine', 'pug');

var User = require('./models/userModel');

userRouter = require('./routes/userRoutes')(User);

app.use('/api/login', userRouter);

app.get('/', function(req, res){
    res.render('index', { title: 'E-Cart CMS', message: 'Welcome to E-Cart Shopping Center' });
});

app.listen(port, function(){
    console.log('Gulp is running on PORT: ' + port); 
});