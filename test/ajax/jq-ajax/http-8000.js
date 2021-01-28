var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();

server.listen(8000,function(){
    console.log('8000');
});

server.on('request',function(req,res){
    var urls = url.parse(req.url,true);

    if(req.method == 'GET'){
        if(urls.pathname == '/'){
            
        }else if(urls.pathname == '/jq_ajax'){
            res.end('red');
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
        if(urls.pathname == '/'){
            
        }else if(urls.pathname == '/jq_ajax'){
            res.end('red');
        }
        else{
            
        }
    }else{

    }
})