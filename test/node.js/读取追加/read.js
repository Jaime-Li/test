var fs = require('fs');

fs.readFile('a.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})