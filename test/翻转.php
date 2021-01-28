<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		
		$str = "江苏教师资格网";
		$in = ['试','考','证'];
		$l = mb_strlen($str);
		for($i=0;$i<$l;$i++){
			$array[] = mb_substr($str, $i,1);
		}
		
		krsort($array);
		array_splice($array,1,0,$in);
		krsort($array);
		$res = implode($array);

		var_dump($res);
	 ?>

	 <?php 
	 	$a = 'abcdefg';
	 	$len = strlen($a);
	 	for($i=0;$i<$len;$i++){
	 		$arr[] = $a[$i];
	 	}
	 	$res = implode($arr);
	 	var_dump($res);
	  ?>
	  <br>

	  <?php 
	  	$ch = '大威天龙';
	  	$ins = 'aaa';
	  	$res = mb_strlen($ch);
	  	for($i=0;$i<$res;$i++){
	  		$arr2[] = mb_substr($ch,$i,1);
	  	}
	  	array_splice($arr2,2,0,$ins);
	  	print_r($arr2);
	   ?>
</body>
</html>