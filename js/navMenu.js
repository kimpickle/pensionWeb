$(function(){
	$(".snd").mouseenter(function(){
		$(this).find("ul").stop().slideDown(500);
	});
	
	$(".snd").mouseleave(function(){
		$(this).children("ul").stop().slideUp(500);
	});
});