var arr = [
    {id:1,name:'路飞',sex:'男'},
    {id:2,name:'三刀流',sex:'男'},
    {id:3,name:'娜美',sex:'女'}
]
    
var str = JSON.stringify(arr);
// console.log(str);
const fs = require('fs');
fs.writeFile('hzw.json',str,(err)=>{
    if(!err){
        console.log('存入成功');
    }else{
        console.log(err);
    }
})
