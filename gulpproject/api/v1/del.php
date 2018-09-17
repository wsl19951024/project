<?php
	$name = $_GET["name"];
	header("Access-Control-Allow-Origin:*");
	mysql_connect("localhost","root","");
	mysql_select_db("shop");
	mysql_query("set names 'utf8'");
	$sql = "DELETE FROM shop WHERE name = '$name'";
	$result = mysql_query($sql);
	if($result){
		echo '{"code": 1}';
	}else{
		echo '{"code": 0}';
	}
?>
