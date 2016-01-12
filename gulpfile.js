var gulp = require('gulp');

// for css
var stylus = require('gulp-stylus');  // 预编译
var autoprefixer = require('gulp-autoprefixer');  // 自动前缀
var minifyCSS = require('gulp-minify-css');  // 压缩

// for javascript
var concat = require('gulp-concat');  // 合并
var uglify = require('gulp-uglify');  // 压缩

// rename html/css/js files
var rename = require('gulp-rename');

// localhost
var connect = require('gulp-connect');

gulp.task('css', function() {
	gulp.src('stylus/main.styl')
		.pipe(stylus({compress: false, paths: ['stylus']}))
		.pipe(autoprefixer())
		//.pipe(minifyCSS())
		.pipe(rename('style.css'))
		.pipe(gulp.dest('css'))
});

gulp.task('js', function() {
	gulp.src(['bower_components/jquery/dist/jquery.js', 'bower_components/modernizr/dist/modernizr-build.js'])
		.pipe(concat('output.js'))    // output.min.js
		.pipe(uglify())
		.pipe(gulp.dest('js'))
});


gulp.task('watch', function() {
	gulp.watch('stylus/*.styl', ['css']);
	//gulp.watch('jade/*.jade', ['html']);
});

gulp.task('default', ['css', 'js']);

// gulp.task('connect', function() {
// 	connect.server({
// 		root: '/',
// 		livereload: true,
// 		open: true
// 	});
// });

// gulp.task('start', ['connect', 'watch']);

