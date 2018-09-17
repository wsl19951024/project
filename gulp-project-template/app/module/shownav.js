//二级标题展示
 define(function () {
    function Shownav(){

    }
    Shownav.prototype = {
        constructor:Shownav,
        show:function(){
            $("#show").on("click",function(){
                $("#nav").stop().slideToggle(400);
            })
        }
    }
   return new Shownav();
});