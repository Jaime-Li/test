var fs = require('fs');

var str = '牛逼';

fs.readFile('a.txt','utf8',(err,data)=>{
    if(!err){
        var newStr = data + str;
        fs.writeFile('a.txt',newStr,(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('追加成功');
            }
        })
    }else{
        console.log(err);
    }
})