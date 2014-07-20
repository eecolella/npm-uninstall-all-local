"use strict";

//module.exports = {
//    'npm-uninstall-local': function () {

        var exec = require('child_process').exec,
            fs = require('fs'),
            str = 'npm uninstall';


        if (fs.existsSync('./package.json')) {
            var fileJSON = fs.readFileSync('./package.json', 'utf8');

            fileJSON = JSON.parse(fileJSON);

            for (var prop  in fileJSON.devDependencies)
                str += ' ' + prop;


            exec(str, function (error, stdout, stderr) {

                console.log('\x1b[36m%s\x1b[0m', '\n' + stdout);
                console.log('\x1b[37m', ''); //restore white

                console.log('\x1b[31m', stderr);
                console.log('\x1b[37m', ''); //restore white

                if (error !== null) {
                    console.log('\x1b[31m', 'exec error: ' + error);
                    console.log('\x1b[37m', ''); //restore white
                }
            });
        }else{
            console.log('\x1b[31m', '\'./package.json\' does not exist');
            console.log('\x1b[37m', ''); //restore white
        }

//    }
//};


