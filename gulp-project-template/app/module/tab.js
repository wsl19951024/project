//tab选项卡
define(function(){
	function Tab(){

	}
	Tab.prototype = {
		constructor:Tab,
		showtab:function(options){
            var _this = this;
            this.navLi = options.navLi;
            this.contLi = options.contLi;
			 this.navLi.click(function () {
                // 1.1修改被移入选项卡的背景颜色
                $(this).addClass("current");
                // 1.2还原其它兄弟选项卡的背景颜色
                $(this).siblings().removeClass("current");
                // 1.3获取当前移出选项卡的索引
                var index = $(this).index();
                // 1.4根据索引找到对应的图片
                var $li = _this.contLi.eq(index);
                // 1.5隐藏非当前的其它图片
                $li.siblings().removeClass("show");
                // 1.6显示对应的图片
                $li.addClass("show");
            });
		}
	}
	return new Tab();
})