'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _browserify = require('browserify');

var _browserify2 = _interopRequireDefault(_browserify);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulpBabel = require('gulp-babel');

var _gulpBabel2 = _interopRequireDefault(_gulpBabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_gulp2.default.task('run', function () {
  return _gulp2.default.src('./*.js').pipe((0, _gulpBabel2.default)({
    presets: ['es2015']
  })).pipe(_gulp2.default.dest('dist'));
});

_gulp2.default.task('serve', ['run'], function () {
  _browserSync2.default.init({
    server: {
      baseDir: "./"
    }
  });
  _gulp2.default.watch("./*.*").on('change', _browserSync2.default.reload);
});

_gulp2.default.task('build', function () {
  return (0, _browserify2.default)('./').bundle().pipe('bundle.js').pipe(_gulp2.default.dest('./build'));
});