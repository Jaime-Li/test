var controller = require('./controller');
var url = require('url');

module.exports = {
    start:function(server){
        server.on('request',function(req,res){
            // res.end('123');
            var urls = url.parse(req.url,true);
            // console.log(urls);
            if(urls.pathname == '/'){   
                controller.index(res);
            }else if(urls.pathname == '/getone'){
                // console.log(2);
                controller.getone(req,res,urls.query.id);
            }else if(urls.pathname == '/edituser'){
                controller.getedit(req,res,urls.query.id);
            }else if(urls.pathname == '/edit'){
                controller.edit(req,res,urls.query.id);
            }else if(urls.pathname == '/del'){
                controller.del(req,res,urls.query.id);
            }
            else{
                controller.other(req,res);
            }
        })
    }
}