// プラグインの読み込み
const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('sass'); // dart-sassを使用
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

// Sassコンパイルタスクの定義
const compile = () => {
  return gulp
    .src('sass/style.scss')
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(sourcemaps.init())
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass())
    .pipe(
      autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8'])
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/css'));
};

// ファイル変更監視タスクの定義
const watch = () => {
  return gulp.watch('sass/**', compile);
};

// ファイル変更監視タスクのエクスポート
exports.watch = watch;
