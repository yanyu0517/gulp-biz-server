var gulp = require('gulp'),
    path = require('path'),
    through = require('through2'),
    opener = require('opener'),
    bizserver = require('../index.js');


gulp.task('default', function() {
    gulp.src('').pipe(bizserver({
        port: 8088
    })).pipe(through.obj(function(file, enc, cb) {
        opener('http://127.0.0.1:8088/quickview/');
        cb(null, file)
    }));
});