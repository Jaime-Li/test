var str = '李大帅';

var fs = require('fs');
fs.writeFile('node.js/a.txt',str,function(err){
    if(!err){
        console.log('写入成功');
    }else{
        console.log(err);
    }
})