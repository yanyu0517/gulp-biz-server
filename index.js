'use strict';

var through = require('through2'),
    BizServer = require('biz-server');

function gulpServer(options) {
    var stream = through.obj(function(file, enc, cb) {
        BizServer.startServer(options, function() {
            cb(null, file);
        });
    });
    return stream;
}

module.exports = gulpServer;