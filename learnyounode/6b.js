var filefilter = require('./6a.js');

var dir_s = process.argv[2];
var extName_s = process.argv[3];

filefilter(dir_s, extName_s, function (err, arOfStr) {
    arOfStr.forEach(function (v) {
        console.info(v);
    });
});
