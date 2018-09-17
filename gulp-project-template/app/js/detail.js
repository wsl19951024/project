//detail页面的业务逻辑代码
require(["config"],function(){
	require(["header","tab","url","jquery"],function(header,tab,url1,$){
		header.init();
		tab.showtab({navLi:$(".nav li"),contLi:$(".cont li")});
		//获取url中的参数
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
        var id = getUrlParam('id');
        $.ajax({
				type: "GET",
				url:url1.url +"/api/v1/list.php",
				data:{"id":id},
				dataType:"json",
				success:function(data){
					console.log(data);
					for(var i=0;i<data.length;i++){
						$("#bigimg1,#simg1").attr("src",data[i].imgone);
						$("#bigimg2,#simg2").attr("src",data[i].imgtwo);
						$("#bigimg3,#simg3").attr("src",data[i].imgthree);
						$("#bigimg4,#simg4").attr("src",data[i].imgfour);
						$("#title").text(data[i].name);
						$("#pr1").text(data[i].price);
						$("#xinxi").text(data[i].name);
						$("#pr2").text("￥"+data[i].price);
						$("#fenqi1").text(data[i].fenqione);
						$("#fenqi2").text(data[i].fenqitwo);
						$("#fenqi3").text(data[i].fenqithree);
						console.log(data[i].name);
					}
				},
				error:function(){
					alert("请求失败，请刷新页面");
				}
			});
        	$("#shop").on("click",function(){
				$.ajax({
	        		type:"GET",
	        		url:url1.url+"/api/v1/insert.php",
	        		data:{
	        			"name":$("#title").text(),
	        			"price":$("#pr1").text(),
	        			"img":$("#bigimg1,#simg1").attr("src"),
	        			"val":1,
	        			"allprice":$("#pr1").text()
	        		}
	        	})
			});
	})
})