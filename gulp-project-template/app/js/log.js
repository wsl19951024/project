require(['config'],function(){
	require(['url','jquery'],function(url1,$){
			var arr = [false,false];
			// var usernameArr = [];
			//满足条件的验证
			// document.getElementById("form2").onsubmit = function(e){
			// 	e = e || e.window;
			// 	var isTrue = arr.every(function(items){
			// 		return items == true;//判断是否都为true
			// 	})
			// 	if(!isTrue){
			// 		e.preventDefault();//不为true 阻止默认事件
			// 	}
			// }
		document.getElementById("isphone").onblur = function(){			
				if(document.getElementById("isphone").value == ""){
					document.getElementById("isphone").parentNode.children[1].style.display = "block";
					document.getElementById("isphone").parentNode.children[2].style.display = "none";
					                      
				}else if(document.getElementById("isphone").value  != ""){
					document.getElementById("isphone").parentNode.children[1].style.display = "none";
					document.getElementById("isphone").parentNode.children[2].style.display = "none";
				}
			};
		document.getElementById("pwd").onblur = function(){
			// if(document.getElementById("pwd").value == ""){
			// 	document.getElementById("pwd").parentNode.children[1].style.display = "block";
			// 	document.getElementById("pwd").parentNode.children[2].style.display = "none";
			// }else 
			if(document.getElementById("pwd").value  != ""){
				document.getElementById("pwd").parentNode.children[1].style.display = "none";
				document.getElementById("pwd").parentNode.children[2].style.display = "none";
			}
			
		}
		document.getElementById("sure").onclick = function(e){
			e = e || e.window;
			var username = document.getElementById("isphone").value;
			var password = document.getElementById("pwd").value
	
				$.ajax({ 
					type: "GET",
					url:url1.url +"/api/v1/login.php",
					data:{
						"username": username
					},
					dataType:"json",
					success:function(data){
						console.log(data);
						console.log(arr);
							for(var i = 0; i< data.length;i++){
								console.log(data[i].username);
								console.log(username);
								console.log(data[i].password);
								console.log(password)

								if(data[i].username == username){

									document.getElementById("isphone").parentNode.children[1].style.display = "none";
									document.getElementById("isphone").parentNode.children[2].style.display = "none";
									arr[0] = true;
									if(data[i].password == password){
										document.getElementById("pwd").parentNode.children[1].style.display = "none";
										document.getElementById("pwd").parentNode.children[2].style.display = "none";
										arr[1] = true;
									}else if(data[i].password != password){
										document.getElementById("pwd").parentNode.children[1].style.display = "none";
										document.getElementById("pwd").parentNode.children[2].style.display = "block";
										arr[1]=false;
									}
								}
								if(document.getElementById("pwd").value == ""){
									document.getElementById("pwd").parentNode.children[1].style.display = "block";
									document.getElementById("pwd").parentNode.children[2].style.display = "none";
								}
							}
					},
					error:function(data){
						document.getElementById("isphone").parentNode.children[1].style.display = "block";
						document.getElementById("isphone").parentNode.children[2].style.display = "none";
						document.getElementById("pwd").parentNode.children[1].style.display = "block";
						document.getElementById("pwd").parentNode.children[2].style.display = "none";

					}
				});
				console.log(arr);
				var isTrue = arr.every(function(items){
					return items == true;//判断是否都为true
				})
				if(!isTrue){
					e.preventDefault();//不为true 阻止默认事件
				}
			
		}

		
	})
})