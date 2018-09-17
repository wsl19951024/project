//生成验证码
 define(function () {
    function Register(){

    }
    Register.prototype = {
        constructor:Register,
        yanzheng:function(){
            var oInput = document.getElementById("yanzhen");
			var oCont = document.getElementById("cont");		
			var arrYz = yanzheng();
			
			oCont.innerHTML = arrYz.join("");//显示
			
			oCont.onclick = function(){
				arrYz = yanzheng();//生成新的验证码
				oCont.innerHTML = arrYz.join("");
			}
			
			//生成四位验证码（两种方法）
			
			//ASCII
			function randomNum(){
				
				// Math.random()*(max-min) + min  (min-max的随机数)
				
				var num = parseInt(Math.random()*10) + 48;
				return String.fromCharCode(num);
			}
			
			function randomLower(){
				var num = parseInt(Math.random()*26) + 97;
				return String.fromCharCode(num);
			}
			
			function randomUpper(){
				var num = parseInt(Math.random()*26) + 65;
				return String.fromCharCode(num);
			}
			
			function randomChar(){
				var num = parseInt(Math.random()*3);
				
				switch(num){
					case 0 : return randomNum();
					case 1 : return randomLower();
					case 2 : return randomUpper();
				}
			}
			
			function yanzheng(){
				var arr=[];
				for(var i = 0; i < 4; i++){
					arr.push(randomChar());
				}
				return arr;
			}
			
        }
    }
   return new Register();
});