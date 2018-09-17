/*存cookie
 * key  string cookie的名称
 * value string cookie的值
 * day  number 几天后过期 不传默认是会话生存期
 * */

/*取cookie
 * key string 取的cookie的名称
 * */

define(function(){
	function Cookie(){

	}
	Cookie.prototype = {
		constructor:Cookie,
		setCookie:function(key,value,day){
			if(day){
				var d = new Date();
				d.setDate(d.getDate()+day);
				document.cookie = key + "=" + value + ";expires=" + d;
			}else{
				document.cookie = key + "=" + value;
			}
		},
		getCookie:function(key){
				//页面有没有cookie
			if(document.cookie){
				var str = document.cookie;
				var arr = str.split("; ");
				for(var i = 0; i < arr.length; i++){
					var item = arr[i].split("=");
					//item =["username","zhagnsan"]
					if(item[0] == key){
						return item[1];
					}
				}
				return "";
			}else{
				return "";
			}
		}
	}
	return new Cookie();
})