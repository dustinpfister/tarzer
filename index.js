var options = process.argv.slice(2),
path = require('path');

if(options[0] === 'init'){

    require(path.join(__dirname, 'commands/init/index.js')).call(options);

}