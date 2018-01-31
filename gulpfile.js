var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT:8001
        },
        ignore: ['./node_modules/**']
    }).
    on('restart', function(){
        console.log('Server restarted!');
    });
});

gulp.task('test', function(){
    gulp.src('Tests/*.js', {type:false})
    .pipe(gulpMocha({email:"Usama Ali"}));
});