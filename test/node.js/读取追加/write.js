var fs = require('fs');

var str = '大逼哥';

fs.writeFile('a.txt',str,(err)=>{
    if(!err){
        console.log('写入成功');
    }else{
        console.log(err);
    }
})