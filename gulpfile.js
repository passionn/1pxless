var gulp =require('gulp');
var less =require('gulp-less');
var postcss = require('gulp-postcss');

gulp.task('css',function(){
    gulp.src('demo/index.less')
        .pipe(less())
        .pipe(
            postcss([
                require('postcss-write-svg')({ /* options */ })
            ])
        )
        .pipe(gulp.dest('demo/'))
});