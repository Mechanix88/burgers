var gulp        = require('gulp'), 
    sass        = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync');

gulp.task('sass', function(){ 
    return gulp.src('sass/**/*.{sass,scss}') 
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css')) 
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.{sass,scss}' , gulp.parallel('sass'));
});

gulp.task('default', gulp.parallel('watch'))

gulp.task('default', function () {
return gulp.src('css/*')

.pipe( autoprefixer({
overrideBrowserslist: ['last 2 versions'],
cascade: false
}))
.pipe( gulp.dest('css') );

});



gulp.task('default', () =>
    gulp.src('img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img'))
);


gulp.task('browser_sync', function () {
    browserSync({
    port: 9000,
    open: true,
    notify: false,
    server: 'burger'
    
    });
    });