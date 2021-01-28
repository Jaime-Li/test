<?php
$test = 6;
switch ($test){
    case 1:
        echo 'aaaa';
        break;
    case 2:
        echo 'bbbbb';
        break;
    case 3:
        echo 'ccccccc';
        break;
    case 4:
        echo '你他妈的';
        break;
    default :
        echo 'wdnmd';
}

$arr = ['name'=>'李大毛','age'=>20];
print_r($arr['name']);

for($i=1;$i<=100;$i++){
    if($i % 3 == 0){
        echo $i." ";
    }
}

echo "<br>";

$n = 0;
for($i=1;$i<=1000;$i++){
    if($i % 3 == 0){
        if($i % 2 ==0){
            $n++;
        }
    }
}
echo $n;

echo "<br>";

for($i=1;$i<=100;$i++){
    switch ($i){
        case (!($i % 15)):
            echo '三五'.",";
            break;
        case (!($i % 3)):
            echo '三'.",";
            break;
        case (!($i % 5)):
            echo '五'.",";
            break;
        default:
            echo $i.",";
    }
}

echo "<br>";
for($i=6;$i>=1;$i--){
    echo "<h".$i.">";
    echo "h".(7-$i);
    echo "</h".$i.">";
}

echo "<hr>";

$n = 5;
for($i=1;$i<=$n;$i++){
    for($j=1;$j<=$n-$i;$j++){
        echo "&nbsp;&nbsp;&nbsp;";
    }
    for($k=1;$k<=$i*2-1;$k++){
        echo "☆";
    }
    echo "<br>";
}