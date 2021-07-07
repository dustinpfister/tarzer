var options = process.argv.slice(2),
path = require('path'),
pkg = require( path.join(__dirname, 'package.json') );


switch(options[0]){
    case 'init':
        require(path.join(__dirname, 'commands/init/index.js')).call(options, pkg);
    break;
    default:
        require(path.join(__dirname, 'commands/default/index.js')).call(options, pkg);
    break;
}