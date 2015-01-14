module.exports = function (dir_s, fileExt_s, fn) {
    var fs = require('fs');
    var path = require('path');
    var files_ar = [];

    fs.readdir(dir_s, function (err, list) {
        if (err) {
            return fn(err);
        }
        
        files_ar = list.filter(function (file_s) {
            return path.extname(file_s) === '.' + fileExt_s;
        });

        fn(null, files_ar);
    });
    
};
