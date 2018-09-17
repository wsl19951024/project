<?php
	$allprice = $_GET['allprice'];
	$val = $_GET['val'];
	$name =$_GET['name'];
	header("Access-Control-Allow-Origin:*");
	mysql_connect("localhost","root","");
	mysql_select_db("shop");
	mysql_query("set names 'utf8'");
	$sql = "UPDATE shop SET val='$val',allprice='$allprice' WHERE name='$name'";
	
	$isSucc = mysql_query($sql);
	
	if($isSucc){
		echo '{"code":1}';
	}else{
		echo '{"code":0}';
	}
?>