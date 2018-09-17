//验证表单
define(function(){
	function Validator(){

	}
	Validator.prototype ={
		constructor:Validator,
		qiehuan:function(){
			document.getElementById("cont").onclick = function(){
			return document.getElementById("cont").innerText;
			}
			return document.getElementById("cont").onclick();
		},
		yanzhenreg:function(){
			var _this = this;
			var arr = [false,false,false,false,false];
			
			//满足条件的验证
			document.getElementById("forms").onsubmit = function(e){
				e = e || e.window;
				var isTrue = arr.every(function(items){
					return items == true;//判断是否都为true
				})
				if(!isTrue){
					e.preventDefault();//不为true 阻止默认事件
					alert("请将信息填写完整");
				}
			}
			// //用户名
			document.getElementById("username").onblur = function(){
				var reg =  /^[a-zA-Z0-9_-]{4,16}$/;
				if(this.value == ""){
					arr[0] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
				}else if (reg.test(this.value)){
					arr[0] = true;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";

				}else if(!reg.test(this.value)){
					arr[0] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "block";
				}
				else{
					arr[0] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";
				}
				
			}

			//手机号码
			document.getElementById("phonenum").onblur = function(){
				var reg =  /^[1][3,4,5,7,8][0-9]{9}$/i;
				if(this.value == ""){
					arr[1] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
				}else if (reg.test(this.value)){
					arr[1] = true;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";

				}else if(!reg.test(this.value)){
					arr[1] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "block";
				}
				else{
					arr[1] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";
				}
				
			}
			//密码
			document.getElementById("password").onblur = function(){
				var reg =  /^.{6,16}$/;
				if(this.value == ""){
					arr[2] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
				}else if (reg.test(this.value)){
					arr[2] = true;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";

				}else if(!reg.test(this.value)){
					arr[2] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "block";
				}
				else{
					arr[2] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";
				}
			}
			//确认密码
			
			document.getElementById("ispassword").onblur = function(){
				var pwd = document.getElementById("password").value;
				if(this.value == ""){
					arr[3] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
				}else if (this.value == pwd){
					arr[3] = true;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";

				}else if(this.value != pwd){
					arr[3] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "block";
				}else{
					arr[3] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";
				}
			}
		//验证码
			

			document.getElementById("yanzhen").onblur = function(){
				var yz =  _this.qiehuan();
				// console.log(yz);
				if(this.value == ""){
					arr[4] = false;
					this.parentNode.children[1].style.display = "block";
					this.parentNode.children[2].style.display = "none";
				}else if (this.value.toLowerCase() == yz.toLowerCase()){
					arr[4] = true;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";

				}else if(this.value.toLowerCase() != yz.toLowerCase()){
					arr[4] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "block";
				}
				else{
					arr[4] = false;
					this.parentNode.children[1].style.display = "none";
					this.parentNode.children[2].style.display = "none";
				}
			}
			// console.log(d);
			return this.d;
		}
	}
	return new Validator();
})