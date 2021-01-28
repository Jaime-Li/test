const fs = require('fs');

var str = {id:4,name:'罗兵',sex:'女'};

fs.readFile('hzw.json','utf-8',(err,data)=>{
    if(!err){
        var arr = JSON.parse(data);
        arr.push(str);
        // console.log(arr);
        var obj = JSON.stringify(arr);
        fs.writeFile('hzw.json',obj,(err)=>{
            if(!err){
                console.log('追加成功');
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
        
})