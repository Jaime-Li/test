var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer();
server.listen(8080,function(){
    console.log('8080启动成功');
})

server.on('request',function(req,res){
    var urls = url.parse(req.url,true);
    if(urls.pathname == '/gets'){
        res.end('get');
    }else if(urls.pathname == '/posts'){
        res.end('1');
    }
    else if(urls.pathname == '/getname'){
        var d = '';
        req.on('data',function(post_data){
            d+=post_data;
        })

        req.on('end',function(){
            // console.log(d);
            var obj = require('querystring').parse(d);
            // console.log(obj);
            if(obj.name == 'admin'){
                res.end('1');
            }else{
                res.end('0');
            }
        })

        // if(urls.query.name == 'admin'){      get请求
        //     res.end('1');
        // }else{
        //     res.end('0');
        // }
    }else{
        fs.readFile('.'+urls.pathname,function(err,data_str){
            if(!err){
                res.end(data_str);
            }else{
                res.end('');
            }
        })
    }
})