var url = require('url');
 //调用业务模块进行业务处理
 var controller = require('./controller');

//路由模块  解析不同请求
module.exports = {
    //模块到处的方法
    //接受服务对象
    start:function(server){
        //监听请求事件
        server.on('request',function(req,res){
            //获取请求地址
            var urls = url.parse(req.url,true);
            // console.log(urls);
            //判断请求地址
            if(urls.pathname == '/'){
               
                //传入响应对象
                controller.index(res);
                //如果求情路径不是/,默认就是请求其他资源
            }else if(urls.pathname =='/getone'){
                // console.log(22);
                // res.end('11')
                controller.getone(req,res,urls.query.id);
            }else{
                //调用业务模块的方法进行处理
                controller.other(urls.pathname,res);
            }
        })
    }
}