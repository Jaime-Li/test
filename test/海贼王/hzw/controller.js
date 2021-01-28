var fs = require('fs');
var template = require('art-template');

template.defaults.root = './';
module.exports = {
    index:function(res){
        fs.readFile('./db.json','utf8',function(err,json_str){
            var json_arr = JSON.parse(json_str);
            var htmls = template('./index.html',{data:json_arr});
            res.end(htmls);
        })
    },
    other:function(req,res){
        fs.readFile('.'+req.url,function(err,data){
            if(!err){
                res.end(data);
            }else{
                res.end('');
            }
            
        })
    },
    getone:function(req,res,id){
        fs.readFile('./db.json','utf8',function(err,json_str){
            var json_arr = JSON.parse(json_str);
            var s = '';
            for(let i=0;i<json_arr.length;i++){
                if(id == json_arr[i].id){
                    s = json_arr[i];
                }
            }
            var htmls = template('./user.html',{data:s});
            res.end(htmls);
        })
    },
    getedit:function(req,res,id){
        fs.readFile('./db.json','utf8',function(err,json_str){
            var json_arr = JSON.parse(json_str);
            var s = '';
            for(let i=0;i<json_arr.length;i++){
                if(id == json_arr[i].id){
                    s = json_arr[i];
                }
            }
            var htmls = template('./edit.html',{data:s});
            res.end(htmls);
        })
    },
    edit:function(req,res,id){
        var fd = require('formidable');
        var form = new fd.IncomingForm();
        form.parse(req,function(err,filds,files){
            console.log(filds);
            console.log(files);
        })
        res.end('');
        // var postdata = '';
        // req.on('data',function(d){
        //     postdata += d;
        // })
        // req.on('end',function(){
            // console.log(postdata);
        //     var qus = require('querystring');
        //     var obj = qus.parse(postdata);
        //     // console.log(obj);
        //     fs.readFile('./db.json','utf8',function(err,json_data){
        //         var json_arr = JSON.parse(json_data);
        //         for(let i=0;i<json_arr.length;i++){
        //             if(json_arr[i].id == id){
        //                 json_arr[i].name = obj.name;
        //                 json_arr[i].power = obj.power;
        //                 json_arr[i].team = obj.team;
        //             }
        //         }
        //         fs.writeFile('./db.json',JSON.stringify(json_arr),function(err){
        //             res.setHeader('Content-type','text/html;charset=utf-8');
        //             if(!err){
        //                 res.end('<script>alert("修改成功");location.href="/"</script>');
        //             }else{
        //                 res.end('<script>alert("修改失败")</script>');
        //             }
        //         })
        //     })
        // })
    },
    del:function(req,res,id){
        fs.readFile('./db.json','utf8',function(err,json_str){
            var json_arr = JSON.parse(json_str);
            var arr = [];
            for(let i=0;i<json_arr.length;i++){
                if(json_arr[i].id != id){
                    arr.push(json_arr[i]);
                }
            }
            fs.writeFile('./db.json',JSON.stringify(arr),function(err){
                res.setHeader('Content-type','text/html;charset=utf-8');
                if(!err){
                    res.end('<script>alert("删除成功");location.href="/"</script>');
                }else{
                    res.end('<script>alert("删除失败");location.href="/"</script>');
                }
            })
        })
    }
}