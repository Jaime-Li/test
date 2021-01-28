var fs = require('fs');
fs.readFile('hzw.json','utf-8',(err,data)=>{
    var arr = JSON.parse(data);
    // console.log(arr);
    var newArr = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i].id != 2){
            newArr.push(arr[i]);
        }
    }
    // console.log(newArr);
    var newArr = JSON.stringify(newArr);
    fs.writeFile('hzw.json',newArr,(err)=>{
        if(!err){
            console.log('删除成功');
        }else{
            console.log(err);
        }
    })
})