var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.listen(9000,function(){
    console.log('9000');
});

server.on('request',function(req,res){
    var urls = url.parse(req.url,true);
    //允许所有请求域
    // res.setHeader('Access-Controller-Allow-Origin','*');
    //只允许具体的一个域名
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:8000');

    if(req.method == 'GET'){
        if(urls.pathname == '/'){
           
        }else if(urls.pathname == '/getcors'){
            res.end('1111');
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
        
        //客户端先发送预先检查请求，响应回客户端，同真是请求
    }else if(req.method == 'OPTIONS'){
        res.setHeader('Access-Control-Allow-Methods','DELETE');
        res.end('12221');
    }
        //客户端发送真实请求，响应数据
    else if(req.method == 'DELETE'){
        res.end('5454');
    }
    else{

    }
})