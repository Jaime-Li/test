var fs = require('fs');

var str = '张大麻子';
fs.readFile('node.js/a.txt','utf-8',function(err,data){
    if(!err){
        var newStr = data+str;
        fs.writeFile('node.js/a.txt',newStr,(err)=>{
            if(!err){
                console.log('追加成功');
            }else{
                console.log(err);
            }
        })
    }else{
        console.log('读取失败');
    }
})
