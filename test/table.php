<?php
$link = mysqli_connect('localhost','root','root');
if(!$link){
    exit('数据库连接失败');
}

mysqli_set_charset($link,'utf8');
mysqli_select_db($link,'test');

$sql = "select * from mysqli_link";

$obj = mysqli_query($link,$sql);


