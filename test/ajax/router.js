var fs = require('fs');
var url = require('url');


module.exports = {
    start:function(server){
        server.on('request',function(req,res){
            var urls = url.parse(req.url,true);
            // console.log(urls.query.name);
            // res.end('111');
            if(urls.pathname == '/gets'){
                console.log('22');
                res.end('大威天龙');
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
    }
}