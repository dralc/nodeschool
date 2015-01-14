// GET URL contents
var http = require('http');

var url = process.argv[2];

var req = http.get(url, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (dat) {
        console.log(dat);
    });
});

req.on('error', function (er) {
    console.error(er);
});
