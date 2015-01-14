var fs = require('fs'),
    path = require('path'),
    dirPath = process.argv[2],
    extName = process.argv[3].replace('.', '');

fs.readdir(dirPath, function (err, list) {
    list.forEach(function (v, i, ar) {
        if (path.extname(v).replace('.', '') === extName) {
            console.log(v);
        }
    });
});
