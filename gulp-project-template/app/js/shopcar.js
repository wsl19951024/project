
require(["config"],function(){
	require(["header","jquery","url"],function(header,$,url1){
		header.init();
		//获取url中的参数
		var index = 0;//控制商品的数量
		var flag =false;
        function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
        var id = getUrlParam('id');
        //刷新页面
        function refresh(){
        	window.location.reload();
        }
      
        document.getElementById("table").onclick = function(e){
         	var target = e.target || e.srcElement;
         	if(target.className == "delBtn"){
         		var name = target.parentNode.parentNode.children[1].innerText;
         		console.log(name);
         		$.ajax({
         			type:"GET",
         			url:url1.url +"/api/v1/del.php",
         			data:{
         			"name":name
         			},
         			success:function(){
         				refresh();
         			},
         			error:function(){
         				alert("删除失败");
         			}
         		})
         	}
         }

         $.ajax({
				type: "GET",
				url:url1.url +"/api/v1/shopadd.php",
				dataType:"json",
				success:function(data){
					console.log(data);
					if(data.length ==0){
        				var insert = `<div id="makesure">
							<img src="/images/makesure.png">
							<a href="/html/list.html"></a>
							</div>`
						document.getElementById("insert").innerHTML = insert;
						$("#content").css("display","none");
						$("#makesure").css('display',"block");
					}
					var str = ""
					for(var i=0;i<data.length;i++){
						str += `<tr class="delthis">
									<td>
										<img src="${data[i].img}" width="100">
									</td>
									<td class="thisname">
										<a href="javascript:;" class="ins">${data[i].name}</a>
										
									</td>
									<td class="danjia">
										${data[i].price}
									</td>
									<td>
										<span class="reduce" name="toreduce">-</span>
										<input type="text" name="" value="${data[i].val}" class="count" disabled>
										<span class="add" name="toAdd">+</span>
									</td>
									<td class="price">
										${data[i].allprice}
									</td>
									<td>
										<a href="javascript:;" title="删除" class="delBtn">X</a>
									</td>
								</tr>`
							
					}
					document.getElementById("tbody").innerHTML = str;
					console.log($("span[name='toAdd']"));
					     //改变商品数量
        				//增加

				     $("span[name='toAdd']").each(function(event){
				     	var _this = $(this);
				     	_this.off("click").on("click",function(){
				     		// console.log($(this));
				     		var danjia = Number($(this).parents(".delthis").children('.danjia').html());
				     		var name = $(this).parent().siblings('.thisname').children('.ins').html();
				     		
							var counts = Number($(this).siblings('.count').val());
							counts++;
							var thisprice = $(this).parents(".delthis").children('.price').html(danjia*counts);
				     		var pricein = $(this).parents(".delthis").children('.price').html();
				     		var cnt = Number($(this).siblings('.count').val())+1;
				     		$(this).siblings('.count').val(counts);

				     		$.ajax({
				        		type:"GET",
				        		url:url1.url+"/api/v1/updata.php",
				        		data:{
				        			"allprice":pricein,
				        			"val":cnt,
				        			"name":name
				        		}
				        	})	
				     	})

				     })
				     //减少
				     $("span[name='toreduce']").each(function(event){
				     	var _this = $(this);
				     	_this.off("click").on("click",function(){
				     		
				     		var danjia = Number($(this).parents(".delthis").children('.danjia').html());
							var name = $(this).parent().siblings('.thisname').children('.ins').html();
							var counts = Number($(this).siblings('.count').val());
							counts--;
							if(counts < 1) counts = 1;
							$(this).parents(".delthis").children('.price').html(danjia*counts);
				     		var pricein2 = $(this).parents(".delthis").children('.price').html();
				     		var cnt2 = Number($(this).siblings('.count').val())-1;
				     		console.log(cnt2);
				     		console.log(pricein2);
				     		$(this).siblings('.count').val(counts);
				     		
				     		$.ajax({
				        		type:"GET",
				        		url:url1.url+"/api/v1/updata.php",
				        		data:{
				        			"allprice":pricein2,
				        			"val":cnt2,
				        			"name":name
				        		}
				        	})	

				     	})

				     })
				},
				error:function(){
					// alert("请求失败，请刷新页面");
				}
		});

	})
})