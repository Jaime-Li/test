var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.listen(9000,function(){
    console.log('9000');
});

server.on('request',function(req,res){
    var urls = url.parse(req.url,true);

    if(req.method == 'GET'){
        if(urls.pathname == '/'){
            // jsonp核心使用原理
            var data = '123';
            res.end('backFun('+data+')');
        }else if(urls.pathname == '/getjson'){
            //接收前端传过来的函数名，拼成函数调用的字符串 如：fun('123')
            res.end(urls.query.callback + '('+'123'+')');
        }
        else{
            fs.readFile('.'+urls.pathname,function(err,backdata){
                if(!err){
                    res.end(backdata);
                }else{
                    console.log(err);
                    res.end('');
                }
            })
        }
    }else if(req.method == 'POST'){
        
    }else{

    }
})