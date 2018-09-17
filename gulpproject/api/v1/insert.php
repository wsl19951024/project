
<?php
$name = $_GET['name'];
$price = $_GET['price'];
$img = $_GET['img'];
$val =$_GET['val'];
$allp = $_GET["allprice"];
header("Access-Control-Allow-Origin:*");
header("content-type:text/html;charset=utf8");
mysql_connect("127.0.0.1","root","");
mysql_select_db("shop");
mysql_query("set names 'utf8'");

$sql1 = "SELECT * FROM shop class WHERE name = '$name'";
$query = mysql_query($sql1);
$updata = "UPDATE shop SET val = val+1 WHERE name = '$name'";

if(mysql_fetch_array($query)){
 	mysql_query($updata);
}else{
	$sql = "INSERT INTO shop (name,price,img,val,allprice) VALUES ('$name','$price','$img','$val','$allp')";
	$isSucc = mysql_query($sql);
	if($isSucc){
		echo "插入数据成功！";
	}else{
		echo "插入数据失败！";
	}
}

mysql_close();
?>