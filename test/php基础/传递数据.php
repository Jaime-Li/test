<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		if(isset($_POST['button'])){
			echo '姓名:'.$_POST['name'].'<br>';
			echo '年龄:'.$_GET['age'].'<br>';
			echo '密码:'.$_POST['psw'].'<br>';
			echo '性别:'.$_POST['sex'].'<br>';
			echo '字母:'.$_POST['bat'].'<br>';
			echo '爱好:'.(isset($_POST['hobby'])?implode(',',$_POST['hobby']):'鸡掰').'<br>';

		}

	 ?>

	<form action="?age=22" method="post">
		<input type="text" name="name"><br>
		<input type="password" name="psw"><br>
		<input type="radio" name="sex" value="男">男
		<input type="radio" name="sex" value="女">女<br>
		<select name="bat" id="">
			<option value="aa">aa</option>
			<option value="bb">bb</option>
			<option value="cc">cc</option>
		</select><br>
		<input type="checkbox" name="hobby[]" value="抽烟">抽烟
		<input type="checkbox" name="hobby[]" value="喝酒">喝酒
		<input type="checkbox" name="hobby[]" value="烫头">烫头<br>
		<input type="submit" value="提交" name="button">
	</form>
</body>
</html>