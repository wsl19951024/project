"use strict";require(["config"],function(){require(["header","tab","url","jquery"],function(t,i,e,r){t.init(),i.showtab({navLi:r(".nav li"),contLi:r(".cont li")});var n,a,c=(n=new RegExp("(^|&)"+"id"+"=([^&]*)(&|$)"),null!=(a=window.location.search.substr(1).match(n))?unescape(a[2]):null);r.ajax({type:"GET",url:e.url+"/api/v1/list.php",data:{id:c},dataType:"json",success:function(t){console.log(t);for(var i=0;i<t.length;i++)r("#bigimg1,#simg1").attr("src",t[i].imgone),r("#bigimg2,#simg2").attr("src",t[i].imgtwo),r("#bigimg3,#simg3").attr("src",t[i].imgthree),r("#bigimg4,#simg4").attr("src",t[i].imgfour),r("#title").text(t[i].name),r("#pr1").text(t[i].price),r("#xinxi").text(t[i].name),r("#pr2").text("￥"+t[i].price),r("#fenqi1").text(t[i].fenqione),r("#fenqi2").text(t[i].fenqitwo),r("#fenqi3").text(t[i].fenqithree),console.log(t[i].name)},error:function(){alert("请求失败，请刷新页面")}}),r("#shop").on("click",function(){r.ajax({type:"GET",url:e.url+"/api/v1/insert.php",data:{name:r("#title").text(),price:r("#pr1").text(),img:r("#bigimg1,#simg1").attr("src"),val:1,allprice:r("#pr1").text()}})})})});