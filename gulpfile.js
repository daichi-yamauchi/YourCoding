// プラグインの読み込み
const gulp = require('gulp');

// sassプラグインの読み込み
const sass = require('gulp-sass');
sass.compiler = require('sass'); // dart-sassを使用
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const autoprefixer = require('gulp-autoprefixer');

// 画像圧縮プラグインの読み込み
var imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

// ディレクトリ定義
var paths = {
  sassSrc: 'sass/style.scss', // sassのソースディレクトリ
  sassDst: 'public/css', // sassのコンパイルファイルの保存先ディレクトリ
  imageSrc: 'images', // 画像のソースディレクトリ
  imageDst: 'public/images', // 圧縮画像の保存先ディレクトリ
};

// Sassコンパイルタスクの定義
const compile = () => {
  return gulp
    .src(paths.sassSrc, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass())
    .pipe(
      autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8'])
    )
    .pipe(gulp.dest(paths.sassDst, { sourcemaps: '.' }));
};

// ファイル変更監視タスクの定義
const watchSass = () => {
  return gulp.watch('sass/**', compile);
};

// 画像の圧縮タスク
const imageminTask = () => {
  var srcGlob = paths.imageSrc + '/**/*.+(jpg|jpeg|png|gif)';
  var dstGlob = paths.imageDst;
  return gulp
    .src(srcGlob)
    .pipe(changed(dstGlob))
    .pipe(
      imagemin([
        pngquant({
          quality: [0.7, 0.85], // 画質
          speed: 1, // スピード
        }),
        mozjpeg({
          quality: 85, // 画質
          progressive: true,
        }),
      ])
    )
    .pipe(gulp.dest(dstGlob));
};

// ファイル変更監視タスクの定義
const watchImagemin = () => {
  return gulp.watch(paths.imageSrc + '/**/*', gulp.parallel(imageminTask));
};

// ファイル変更監視タスクのエクスポート
exports.watch = gulp.parallel(watchSass, watchImagemin);
