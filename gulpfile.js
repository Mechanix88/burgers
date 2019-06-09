var gulp        = require('gulp'), 
    sass        = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rm = require('gulp-rm') ,
    browserSync = require('browser-sync'),
    concat = require('gulp-concat');

gulp.task('sass', function(){ 
    return gulp.src('src/sass/**/*.{sass,scss}') 
        .pipe(concat('main.sass'))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('src/css')) 
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.{sass,scss}' , gulp.parallel('sass'));
});

gulp.task('autoprefixer', gulp.parallel('watch'))

gulp.task('default', function () {
return gulp.src('src/css/main.css')
.pipe( autoprefixer({
browsers: ['last 4 versions'],
cascade: false
}))
.pipe( gulp.dest('dist') );

});



gulp.task('img', () =>
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

    gulp.task('clean', function() {
    return gulp.src("dist/**/*" , {read : false}).pipe(rm())
});

gulp.task('copy', function() {
    return gulp.src("src/**/*").pipe(gulp.dest("dist"))

});

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js')
      .pipe(concat('all.js'))
      .pipe(gulp.dest('./dist/'));
  });

// gulp.task("default" , gulp.series("clean" , "copy"))

