require(['config'],function(){
	require(['reg','validator','url','jquery'],function(reg,validator,url1,$){		
		validator.yanzhenreg();
		reg.yanzheng();
		document.getElementById("sub").onclick = function(){
			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;
			var pnumber = document.getElementById("phonenum").value;
			console.log(url1.url +"/api/v1/register.php");
			$.ajax({
				type: "GET",
				url:url1.url +"/api/v1/register.php",
				data:{
					"username":username,
					"pnumber":pnumber,
					"password":password
				}
			});

		}

	})
})