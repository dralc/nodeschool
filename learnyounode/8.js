var http = require('http');
var url_arg = process.argv[2];

// SOLUTION 1
/*
var req = http.get(url_arg, function (res) {
    var allDat = [];

    res.setEncoding('utf8');
    res.on('data', function (dat) {
        //console.log(dat);
        allDat.push(dat);
    });

    res.on('end', function () {
        var s = allDat.join('');
        
        // 1. no. of chars
        console.log(s.length);
        // 2. all string dat
        console.log(s);
    });
});
*/


// SOLUTION 2
var concatStream = require('concat-stream');

var req2 = http.get(url_arg, function (res) {
    // res implements 'Stream.Readable'
    // concatStream probably implements 'Stream.Writable'
    res.pipe(concatStream(function (dat) {
        var dat_s = dat.toString();
        console.log(dat_s.length);
        console.log(dat_s);
    }));
    
}).on('error', function (er) {
    console.error(er);
});