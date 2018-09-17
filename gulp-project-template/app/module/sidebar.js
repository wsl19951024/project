//侧边栏
 define(function () {
    function Sidebar(){

    }
    Sidebar.prototype = {
        constructor:Sidebar,
        side:function(){
             // 1.监听网页的滚动
            $(window).scroll(function () {
                // 1.1获取网页滚动的偏移位
                var offset = $("html,body").scrollTop();
                // 1.2判断网页是否滚动到了指定的位置
                if(offset >= 800){
                    // 1.3显示广告
                    $(".aside img").show(1000);
                }else{
                    // 1.4隐藏广告
                    $(".aside img").hide(1000);
                }
            });
        }
    }
   return new Sidebar();

});