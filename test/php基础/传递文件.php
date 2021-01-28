<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		if(!empty($_POST)){
			echo '<pre>';
			var_dump($_FILES['files']);
		}
	 ?>

	<form action="" method="post" enctype="multipart/form-data">
		<input type="file" name="files">
		<div class="img"></div>
		<input type="submit" value="上传" name="button">
	</form>
</body>
</html>