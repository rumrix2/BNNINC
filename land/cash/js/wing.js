$(document).ready(function(){
	
	var speed = '1000';
	var easing = 'swing';
	var yPos = 0;
	var pos = $(".left_wing").offset().top;

	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if( scrollTop > pos ){
			yPos = scrollTop - pos + 300;
		}else{
			yPos = pos;
		}
		$('.left_wing').stop().animate({"top": yPos}, 800);
	});

});



function scrollBanner(target, h){
	
	//target : 스크롤 영역 class명
	// h : 스크롤 위치값

	var speed = '1000';
	var easing = 'swing';
	var yPos = 0;
	var pos = $("."+target).offset().top;

	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if( scrollTop > pos ){
			yPos = scrollTop - pos + h;
		}else{
			yPos = pos;
		}
		$('.'+target).stop().animate({"top": yPos}, 800);
	});
}