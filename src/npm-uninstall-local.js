module.exports = {
    'npm-uninstall-local': function () {

        var fileJSON = require('./package.json'),
            exec = require('child_process').exec,
            str = 'npm uninstall';

        for (var prop  in fileJSON.devDependencies)
            str += ' ' + prop;

        exec(str, function (error, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });

    }
};


