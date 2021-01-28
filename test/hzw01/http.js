//服务器模块
var http = require('http');
var server = http.createServer();

//加载路由，进行不同请求地址的判断
var router = require('./router');
//调用路由方法，将服务对象传入
router.start(server);

server.listen(8080,function(){
    console.log('服务器启动成功');
})

