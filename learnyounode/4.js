//console.log(process.argv);


var fileName = process.argv[2],
    newlines = 0;

var fs = require('fs');
fs.readFile(fileName, {encoding: 'utf8'}, function (err, data) {
    newlines = data.split('\n').length - 1;
    //console.info('LINES:', newlines);
    console.info(newlines);
});

