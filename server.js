var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/dist')).listen(10000, function(){
    console.log('Server running on 10000...');
});
