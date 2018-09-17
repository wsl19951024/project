<?php
$username = $_GET['username'];
$number = $_GET['pnumber'];
$password = $_GET['password'];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");

mysql_connect("127.0.0.1","root","");
mysql_select_db("register");

$sql = "INSERT INTO register (username,password,pnumber) VALUES ('$username','$password','$number')";

mysql_query("set names 'utf8'");

$isSucc = mysql_query($sql);
if($isSucc){
	echo "插入数据成功！";
}else{
	echo "插入数据失败！";
}
mysql_close();
?>