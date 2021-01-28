<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$num1 = $_POST['num1'];
		$num2 = $_POST['num2'];
		$op = $_POST['op'];
		$res = '';
		if($num1 && $num2){
			echo '计算结果';
			switch ($op) {
				case '0':
					$res = $num1 + $num2;
					break;
				case '1':
					$res = $num1 - $num2;
					break;
				case '2':
					$res = $num1 * $num2;
					break;
				case '3':
					$res = $num1 / $num2;
					break;
			}
		}else{
			echo '请输入数字';
		}

	 ?>

	<form action="" method="post">
		<input type="text" name="num1" value="<?php echo $num1 ?>">
		<select name="op" id="">
			<option value="0" <?php echo $op == '0'?'selected':'' ?>>+</option>
			<option value="1" <?php echo $op == '1'?'selected':'' ?>>-</option>
			<option value="2" <?php echo $op == '2'?'selected':'' ?>>*</option>
			<option value="3" <?php echo $op == '3'?'selected':'' ?>>/</option>
		</select>
		<input type="text" name="num2" value="<?php echo $num2 ?>">
		<input type="submit" value="=">
		<input type="text" name="res" value="<?php echo $res ?>">
	</form>

	
</body>
</html>