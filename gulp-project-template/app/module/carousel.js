//轮播图
define(function (){
	function Carousel() {
		this.init();
	}
	Carousel.prototype = {
		constructor:Carousel,
		init:function(){
			this.box = $("#div1"),
			this.ul = $("#div1 ul"),
			this.aLi = $('#div1 ul li'),
			this.ol = $("#div1 ol"),
			this.goPrev = $("#goPrev"),
		 	this.goNext = $("#goNext"),
		 	this.aBtn = $("#div1 ol li"),//淡入淡出輪播圖按鈕
		 	this.idx = 0,//存当前处于第几张图
		 	this.btnIndex = 0,//按钮的下标
			this.flag = false,//没有播放
			this.len = this.aLi.length,//图片的张数
			this.liWidth = null,
			this.timer = null,
			this.img = $("#div1 ul li img")//设置图片宽度
		},
		lunbo1:function(){
			var _this = this;//留住this
			
			liWid();
			//ul末尾拼接一个aLi[0],计算ul的宽度
			// console.log(_this.ali.css("width"));
			_this.ul.append(_this.aLi.eq(0).clone(true)).css("width",(_this.len+1)*_this.liWidth);
			//动态生成按钮
			for(var i = 0; i < _this.len; i++){
				$("<li class='"+ (i==0?"ac":"") +"'><b><b></li>").appendTo(_this.ol);
				
			}
			//根据屏幕宽度动态设置li的宽度
			$(window).on("resize",liWid)
				function liWid(){
					var liW = $(window).innerWidth();
					_this.liWidth = liW;
					$(_this.aLi).attr("width",_this.liWidth);					
					$(_this.img).attr("width",_this.liWidth);					
				}
			liWid();
			//按钮点击
			
			$("#div1 ol li").on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					$(this).addClass("ac").siblings().removeClass("ac");
					_this.ul.animate({"left":-$(this).index()*_this.liWidth},1000,function(){
						_this.flag = false;
					});
					_this.idx = $(this).index();
				}
			})
			
			_this.goPrev.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.idx--;
					if(_this.idx < 0){
						//瞬间拉回补充那张图
						_this.ul.css("left",-_this.len*_this.liWidth);
						//从补充那张图往最后一张图播放的index
						_this.idx = _this.len - 1;
					}
					$("#div1 ol li").eq(_this.idx).addClass("ac").siblings().removeClass("ac");
					_this.ul.animate({"left":-_this.idx*_this.liWidth},1000,function(){
						_this.flag = false;
					})
				}
			})
	
			_this.goNext.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.idx++;
					if(_this.idx >= _this.len){
						$("#div1 ol li").eq(0).addClass("ac").siblings().removeClass("ac");
						_this.ul.animate({"left":-_this.len*_this.liWidth},1000,function(){
							//瞬间拉回第0张
							_this.ul.css("left",0);
							_this.idx = 0;
							_this.flag = false;
						})
					}else{
						$("#div1 ol li").eq(_this.idx).addClass("ac").siblings().removeClass("ac");
						_this.ul.animate({"left":-_this.idx*_this.liWidth},1000,function(){
							_this.flag = false;
						})
					}
				}
			})


			function auto(){
				_this.timer = setInterval(function(){
					_this.goNext.trigger("click");
				},2500);
			}
			auto();
			
			$("#div1").hover(function(){
				clearInterval(_this.timer);
				_this.goPrev.css("display","block");
				_this.goNext.css("display","block");
			},function(){
				auto();
				_this.goPrev.css("display","none");
				_this.goNext.css("display","none");
			});
		},
		lunbo2:function(){
			var _this = this;//留住this
			_this.aBtn.on("click",function(){
		//自己改变样式
				if(!_this.flag){
					_this.flag = true;
					$(this).addClass("ac").siblings().removeClass("ac");
					//切换图片
					_this.aLi.eq(_this.idx).stop().fadeOut(1000);
					_this.idx = $(this).index();
					_this.aLi.eq(_this.idx).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}
			})
			_this.goPrev.on("click",function(){
				if(!_this.flag){
					_this.flag = true;
					_this.aLi.eq(_this.idx).stop().fadeOut(1000);
					_this.idx--;
					if(_this.idx < 0) _this.idx = _this.aLi.length -1;
					_this.aBtn.eq(_this.idx).addClass("ac").siblings().removeClass("ac");
					_this.aLi.eq(_this.idx).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}
			})
			
			_this.goNext.on("click",function(){
				if (!_this.flag) {
					_this.flag = true;
					_this.aLi.eq(_this.idx).stop().fadeOut(1000);
					_this.idx++;
					if(_this.idx > _this.aLi.length-1) _this.idx = 0;
					_this.aBtn.eq(_this.idx).addClass("ac").siblings().removeClass("ac");
					_this.aLi.eq(_this.idx).stop().fadeIn(1000,function(){
						_this.flag = false;
					});
				}
			})
			
			function auto(){
				_this.timer = setInterval(function(){
				//trigger触发事件的意思
				_this.goNext.trigger("click");
			},4000);
			}
			auto();
			
			$("#div1").hover(function(){
				clearInterval(_this.timer);
				_this.goPrev.css("display","block");
				_this.goNext.css("display","block");
			},function(){
				auto();
				_this.goPrev.css("display","none");
				_this.goNext.css("display","none");
			});
		}
	}
	// var diaoyong = new Carousel();
	// diaoyong.lunbo1();
	// // diaoyong.lunbo2();
	return new Carousel();
})

