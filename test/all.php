<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		if(isset($_POST['button'])){
			$ch = $_POST['chinese'];
			$ma = $_POST['math'];
			if($ch = '' || $ma = ''){
				echo '请输入分数';
			}
			switch ($ch){
				case '':
					echo '请输入语文分数';
					break;
				case !is_numeric($ch):
					echo '请输入数字';
					break;
				case $ch < 0 || $ch > 100;
					echo '分数在0-100之间';
					break;
				default:
					echo '语文分数为：'.$ch;
			}
			switch ($math){
				case '':
					echo '请输入数学分数';
					break;
				case !is_numeric($ch):
					echo '请输入数字';
					break;
				case $ch < 0 || $ch > 100;
					echo '分数在0-100之间';
					break;
				default:
					echo '数学分数为：'.$ch;
			}
		}
	 ?>

	<form action="" method="post">
		<input type="text" name="chinese">
		<input type="text" name="math">
		<input type="submit" name="button" value="提交成绩">
	</form>
</body>
</html>