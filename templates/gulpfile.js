var gulp = require('gulp'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    jade = require('gulp-jade'),
    connect = require('gulp-connect');

gulp.task('default',['templates','js','serve','watch']);

gulp.task('watch',function(){
    gulp.watch(['./app/**/*.js','./app/**/*.jsx'],['js']);
    gulp.watch('./app/**/*.jade',['templates']);
});

gulp.task('js',function(){
    var b = browserify();
    b.transform(reactify);
    b.add('./app/app.js');
    
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('./dist/script/'));
});

gulp.task('templates',function(){
    gulp.src('./app/**/*.jade')
        .pipe(jade({pretty:true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('serve',function(){
    connect.server({
        root:'./dist',
        port:3000
    });
});