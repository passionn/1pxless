var gulp =require('gulp');
var less =require('gulp-less');

gulp.task('css',function(){
    gulp.src('demo/index.less')
        .pipe(less())
        .pipe(gulp.dest('demo/'))
});