"use strict";define(function(){function i(){this.init()}return i.prototype={constructor:i,init:function(){this.box=$("#div1"),this.ul=$("#div1 ul"),this.aLi=$("#div1 ul li"),this.ol=$("#div1 ol"),this.goPrev=$("#goPrev"),this.goNext=$("#goNext"),this.aBtn=$("#div1 ol li"),this.idx=0,this.btnIndex=0,this.flag=!1,this.len=this.aLi.length,this.liWidth=null,this.timer=null,this.img=$("#div1 ul li img")},lunbo1:function(){var l=this;t(),l.ul.append(l.aLi.eq(0).clone(!0)).css("width",(l.len+1)*l.liWidth);for(var i=0;i<l.len;i++)$("<li class='"+(0==i?"ac":"")+"'><b><b></li>").appendTo(l.ol);function t(){var i=$(window).innerWidth();l.liWidth=i,$(l.aLi).attr("width",l.liWidth),$(l.img).attr("width",l.liWidth)}function n(){l.timer=setInterval(function(){l.goNext.trigger("click")},2500)}$(window).on("resize",t),t(),$("#div1 ol li").on("click",function(){l.flag||(l.flag=!0,$(this).addClass("ac").siblings().removeClass("ac"),l.ul.animate({left:-$(this).index()*l.liWidth},1e3,function(){l.flag=!1}),l.idx=$(this).index())}),l.goPrev.on("click",function(){l.flag||(l.flag=!0,l.idx--,l.idx<0&&(l.ul.css("left",-l.len*l.liWidth),l.idx=l.len-1),$("#div1 ol li").eq(l.idx).addClass("ac").siblings().removeClass("ac"),l.ul.animate({left:-l.idx*l.liWidth},1e3,function(){l.flag=!1}))}),l.goNext.on("click",function(){l.flag||(l.flag=!0,l.idx++,l.idx>=l.len?($("#div1 ol li").eq(0).addClass("ac").siblings().removeClass("ac"),l.ul.animate({left:-l.len*l.liWidth},1e3,function(){l.ul.css("left",0),l.idx=0,l.flag=!1})):($("#div1 ol li").eq(l.idx).addClass("ac").siblings().removeClass("ac"),l.ul.animate({left:-l.idx*l.liWidth},1e3,function(){l.flag=!1})))}),n(),$("#div1").hover(function(){clearInterval(l.timer),l.goPrev.css("display","block"),l.goNext.css("display","block")},function(){n(),l.goPrev.css("display","none"),l.goNext.css("display","none")})},lunbo2:function(){var i=this;function l(){i.timer=setInterval(function(){i.goNext.trigger("click")},4e3)}i.aBtn.on("click",function(){i.flag||(i.flag=!0,$(this).addClass("ac").siblings().removeClass("ac"),i.aLi.eq(i.idx).stop().fadeOut(1e3),i.idx=$(this).index(),i.aLi.eq(i.idx).stop().fadeIn(1e3,function(){i.flag=!1}))}),i.goPrev.on("click",function(){i.flag||(i.flag=!0,i.aLi.eq(i.idx).stop().fadeOut(1e3),i.idx--,i.idx<0&&(i.idx=i.aLi.length-1),i.aBtn.eq(i.idx).addClass("ac").siblings().removeClass("ac"),i.aLi.eq(i.idx).stop().fadeIn(1e3,function(){i.flag=!1}))}),i.goNext.on("click",function(){i.flag||(i.flag=!0,i.aLi.eq(i.idx).stop().fadeOut(1e3),i.idx++,i.idx>i.aLi.length-1&&(i.idx=0),i.aBtn.eq(i.idx).addClass("ac").siblings().removeClass("ac"),i.aLi.eq(i.idx).stop().fadeIn(1e3,function(){i.flag=!1}))}),l(),$("#div1").hover(function(){clearInterval(i.timer),i.goPrev.css("display","block"),i.goNext.css("display","block")},function(){l(),i.goPrev.css("display","none"),i.goNext.css("display","none")})}},new i});