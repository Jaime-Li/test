//业务处理块
const artTemplate = require('art-template');
var fs = require('fs');
var template = require('art-template');
template.defaults.root = './';
module.exports = {
    //接受请求地址和响应对象
    other:function(req,res){
        //根据请求地址获取响应资源
        fs.readFile('.'+req.url,function(err,data){
            if(!err){
                res.end(data);
            }else{
                res.end('');
            }
        })
    },
    index:function(res){
        //读取页面
        
            //读取json数据
            fs.readFile('./db.json','utf8',function(err,json_str){
                var json_arr = JSON.parse(json_str);
                var htmls = template('hzw.html',{data:json_arr})
                //做出响应
                res.end(htmls);
            })
            // res.end(strHtml);
    },

    //获取单个信息
    getone(req,res,id){
        fs.readFile('./db.json','utf8',function(err,data){
            var arr = JSON.parse(data);
            var userinfo = '';
            for(let i=0;i<arr.length;i++){
                if(arr[i].id == id){
                    userinfo = arr[i];
                }
            }
            var htmls = template('user.html',{data:userinfo});
            res.end(htmls);
            // console.log(userinfo);
            // var tag_user = '<h2>id:'+ userinfo.id +'</h2>';
            // tag_user += '<h2>名称:'+ userinfo.name +'</h2>';
            // tag_user += '<h2>能力:'+ userinfo.power +'</h2>';
            // tag_user += '<h2>团队:'+ userinfo.team +'</h2>';
            // fs.readFile('./user.html','utf8',function(html_err,html_data){
            //    res.end( html_data.replace(/{user}/,tag_user));
            // })
        })
    },

    //修改数据
    edituser(req,res,id){
        fs.readFile('./db.json','utf8',function(json_err,json_data){
            var arr_data = JSON.parse(json_data);
            var userinfo = '';
            for(let i=0;i<arr_data.length;i++){
                if(arr_data[i].id == id){
                    userinfo = arr_data[i];
                }
            }
            var htmls = template('edit.html',{data:userinfo});
            res.end(htmls);
        })
    }
}