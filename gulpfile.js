//$ npm install --save-dev gulp@^3.9.1

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
 
gulp.task('pack-js', function () {    
    return gulp.src(['assets/js/lib/*.js',
    'assets/js/modernizr.js',
    'assets/js/output.min.js',
    'assets/js/output.min.js',
    'assets/js/scripts.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('assets/js'));
});
 
gulp.task('pack-css', function () {    
    return gulp.src(['assets/css/bootstrap.min.css', 'assets/css/main-style.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
   .pipe(gulp.dest('assets/css'));
});
 
gulp.task('default', ['pack-js', 'pack-css']);