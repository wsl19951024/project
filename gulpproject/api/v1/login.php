<?php
	$username = $_GET['username'];
	if ($username !== "") {
		header("Access-Control-Allow-Origin:*");
		mysql_connect("127.0.0.1","root","");
		mysql_select_db("register");
		$sql = "SELECT * FROM register class WHERE username = '$username'";
		mysql_query("set names 'utf8'");
		$query = mysql_query($sql);
		$result = array();
		while ($arr = mysql_fetch_array($query)) {
			array_push($result, $arr);
		}
		echo json_encode($result);
		mysql_close();
	}
	
?>

