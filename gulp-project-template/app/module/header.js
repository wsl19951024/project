//定义header模块
define(function(){
	function Header(){}

	Header.prototype.init = function(){
		//1、把header的html内容加载到对应的页面上
		//2、header的交互
		$("#header").load("/html/component/header.html",function(){
			//header的功能代码
			// $("#header h1").on("click",function(){
			// 	alert($(this).html());
			// })
		});

	}

	return new Header();
})