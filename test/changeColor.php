<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		if(isset($_POST['btn'])){
			switch ($_POST['color']){
				case '1':
					$color = 'red';
					break;
				case '2':
					$color = 'blue';
					break;
				case '3':
					$color = 'green';
					break;
				default:
					$color = 'black';
			}
			echo 
		'<script text=>
	 	window. onload = function(){
	 		document.getElementById('s').style.color = '.$color.';
	 	}
	 </script>';
	 
		}


	 ?>
	 
	
	<div id="s">
		aaaaaaaa <br>
		bbbbbbbb <br>
		cccccccc <br>
		dddddddd <br>
	</div>
	<form action="" method="post">
		<select name="color" id="">
			<option value="0">请选择颜色</option>
			<option value="1">红色</option>
			<option value="2">蓝色</option>
			<option value="3">绿色</option>
		</select>
		<input type="submit" name="but" value="更改颜色">
	</form>
</body>
</html>