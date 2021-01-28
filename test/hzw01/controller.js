//业务处理块
var fs = require('fs');

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
        fs.readFile('./hzw.html','utf8',function(err,strHtml){
            //读取json数据
            fs.readFile('./db.json','utf8',function(err,json_str){
                var json_arr = JSON.parse(json_str);
                var trs = '';
                //将页面与json数据进行整合
                for(let i=0;i<json_arr.length;i++){
                    trs += '<tr>';
                    trs += '<td>'+ json_arr[i].id + '</td>';
                    trs += '<td>'+ json_arr[i].name + '</td>';
                    trs += '<td>'+ json_arr[i].power + '</td>';
                    trs += '<td>'+ json_arr[i].team + '</td>';
                    trs +='<td><a href="/getone?id='+json_arr[i].id+'">查看</a><a href="#">修改</a><a href="#">删除</a></td>';
                    trs += '</tr>';
                }
                //正则查找替换
                var htmls = strHtml.replace(/{hh}/,trs);
                // console.log(htmls);
                //做出响应
                res.end(htmls);
            })
            // res.end(strHtml);
        });
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
            // console.log(userinfo);
            var tag_user = '<h2>id:'+ userinfo.id +'</h2>';
            tag_user += '<h2>名称:'+ userinfo.name +'</h2>';
            tag_user += '<h2>能力:'+ userinfo.power +'</h2>';
            tag_user += '<h2>团队:'+ userinfo.team +'</h2>';
            fs.readFile('./user.html','utf8',function(html_err,html_data){
               res.end( html_data.replace(/{user}/,tag_user));
            })
        })
    }
}