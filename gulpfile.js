var gulp = require('gulp'),
    sass = require('gulp-sass'),
    neat = require('node-neat').includePaths,
    livereload = require('gulp-livereload'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer');

var paths = {
    scss: './dev/sass/**/*.scss',
    html: './*.html'
};

function notifyLiveReload(event) {
  var fileName = path.relative(__dirname, event.path);
  livereload.changed();
}

gulp.task('styles', function () {
    return gulp.src(paths.scss)
        .pipe(sass({
            includePaths: ['styles'].concat(neat),
            errLogToConsole: true
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
        .pipe(livereload());
});

gulp.task('sass',function(){
    gulp.start('styles');
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.html).on('change', function(file) {
    livereload.changed(file.path);
  });
});

gulp.task('default', ['watch', 'sass']);
