<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
	
		function check($file){
			//第一步：验证是否有误
			if($file['error'] != 0){
				switch ($file['error']) {
					case '1':
						return '文件大小超过了php.ini中允许的最大值，最大值是：'.ini_get('upload_max_filesize');
					case '2':
						return '文件大小超过了表单允许的最大值';
					case '3':
						return '只有部分文件上传';
					case '4':
						return '没有文件上传';
					case '5':
						return '找不到临时文件';
					case '6':
						return '文件写入失败';
					default:
						return '位置错误';
				}
			}

			//第二步：验证格式
			$info=finfo_open(FILEINFO_MIME_TYPE);
			$mime=finfo_file($info,$file['tmp_name']);
			$allow=array('image/jpeg','image/png','image/gif','image/jpg');
			if(!in_array($mime,$allow)){
				return '只能上传'.implode(',', $allow).'格式';	
			}

			//验证大小
			$size = 1234567;
			if($file['size']>$size){
				return '文件大小不能超过'.number_format($size/1024,1);
			}

			//验证是否fttp上传
			if(!is_uploaded_file($file['tmp_name'])){
				return '文件不是HTTP POST上传';
			}
		}

		if(!empty($_POST)){
			if($error=check($_FILES['images'])){
				echo $error;
			}else{
				//文件上传
				$foldername = date('Y-m-d');		//文件夹名称
				$folderpath = "D:/phpstudy_pro/WWW/test/php基础/img/{$foldername}";	//文件夹路径
				if(!is_dir($folderpath))
					mkdir($folderpath);
				$filename = uniqid('',true).strrchr($_FILES['images']['name'],'.');		//文件名
				$filepath = "$folderpath/$filename";	//文件路径
				if(move_uploaded_file($_FILES['images']['tmp_name'], $filepath)){
					echo "上传成功，文件路径为：{$foldername}/{$filename}";
				}else{
					echo '上传失败';
				}
			}
		}
		

	 ?>
	<form action="" method="post" enctype="multipart/form-data">
		<input type="file" name="images" id="">
		<input type="submit" name="button">
	</form>
</body>
</html>





