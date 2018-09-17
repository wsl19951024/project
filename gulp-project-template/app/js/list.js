require(['config'],function(){
	require(['carousel','header'],function(carousel,header){
		carousel.lunbo2();
		header.init();
	})
})