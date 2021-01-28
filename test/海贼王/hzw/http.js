var http = require('http');

var server = http.createServer();

server.listen(9000,function(){
    console.log('启动成功，请访问127.0.0.1:9000')
})

var router = require('./router');
router.start(server);