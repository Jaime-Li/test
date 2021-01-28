var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.listen(8000,function(){
    console.log('启动成功');
});

server.on('request',function(req,res){
    var urls = req.url;
    console.log(req.url);
    if(urls == '/'){
        // console.log(1);
        // console.log(req.method);
        res.setHeader('content-type','text/html;charset=utf-8');
        // res.write('李大帅');
        fs.readFile('post.html','utf-8',function(err,data){
            res.write(data);
            res.end();
        })
    }else{
        fs.readFile('.'+urls,function(err,data){
            if(!err){
                res.write(data);
            }else{
                res.write('');
            }
            
            res.end();
        })
    }
    
    
})