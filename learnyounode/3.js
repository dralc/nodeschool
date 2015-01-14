var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], 'utf8');

//var str = buffer.toString();

var arr = buffer.split('\n');
//var arr = str.split('\n');

console.log(arr.length - 1);
//console.log(arr.length - 1);