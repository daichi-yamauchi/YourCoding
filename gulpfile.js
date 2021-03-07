// プラグインの読み込み
const gulp = require('gulp');

// sassプラグインの読み込み
const sass = require('gulp-sass');
sass.compiler = require('sass'); // dart-sassを使用
const sassGlob = require('gulp-sass-glob');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// postCssプラグインの読み込み
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssdeclsort = require('css-declaration-sorter');
const mqpacker = require('css-mqpacker');

// 画像圧縮プラグインの読み込み
var imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const changed = require('gulp-changed');

// ディレクトリ定義
var paths = {
  sassSrc: 'sass/style.scss', // sassのソースディレクトリ
  sassDst: 'docs/css', // sassのコンパイルファイルの保存先ディレクトリ
  imageSrc: 'images', // 画像のソースディレクトリ
  imageDst: 'docs/images', // 圧縮画像の保存先ディレクトリ
};

// Sassコンパイルタスクの定義
const compile = (done) => {
  const postcssPlugins = [
    // browserlistはpackage.jsonに記載[推奨]
    autoprefixer({
      cascade: false,
    }),
    cssdeclsort({
      order: 'smacss',
    }),
    mqpacker(),
  ];

  gulp
    .src(paths.sassSrc, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>'),
      })
    )
    .pipe(sassGlob()) // Sassの@importにおけるglobを有効にする
    .pipe(sass())
    .pipe(postcss(postcssPlugins))
    .pipe(gulp.dest(paths.sassDst, { sourcemaps: '.' }));
  done();
};

// 画像の圧縮タスク
const imageminTask = (done) => {
  var srcGlob = paths.imageSrc + '/**/*.+(jpg|jpeg|png|gif)';
  var dstGlob = paths.imageDst;
  gulp
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
  done();
};

// ファイル変更監視タスクの定義
const watch = (done) => {
  gulp.watch('sass/**', compile);
  gulp.watch(paths.imageSrc + '/**/*', gulp.parallel(imageminTask));
  done();
};

// ファイル変更監視タスクのエクスポート
exports.default = watch;
