require(['config'],function(){
	require(['carousel','sidebar','shownav'],function(carousel,sidebar,shownav){
		carousel.lunbo1();
		sidebar.side();
		shownav.show();
	})
})