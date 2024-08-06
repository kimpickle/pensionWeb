$(function(){
	// 팝업창
	// 오늘 그만보기, 닫기 버튼
	$(".today, .esc").click(function(){
		$("#popUp").hide();
	});
	
	// 메인 슬라이드 
	$("#mainSlide li").each(function(indexNum){
		$(this).css("left", 1200*indexNum);
	});
	
	setInterval(function(){
		$("#mainSlide li").each(function(indexNum){
			let nowLeft = parseInt($(this).css("left")); 
			console.log(nowLeft);
			let moveLeft = nowLeft - 1200;
			$(this).animate({left:moveLeft}, 3000, function(){
				if(moveLeft==-1200) 
				$(this).css("left",3600);
			});
		});
	}, 10000);
	

	//다양한 즐길거리 슬라이드
	$("#playSlide li").each(function(indexNum){
		$(this).css("left", 1200*indexNum);
	});
	
	setInterval(function(){
		$("#playSlide li").each(function(indexNum){
			let nowLeft = parseInt($(this).css("left")); 
			console.log(nowLeft);
			let moveLeft = nowLeft - 1200;
			$(this).animate({left:moveLeft}, 3000, function(){
				if(moveLeft==-1200) 
				$(this).css("left",3600);
			});
		});
	}, 5000);
	
	let parentIndexNum = 0;
	
	$(".slideBt li").click(function(){
		parentIndexNum = $(this).index();
		$("#playSlide").animate({left:-1200*parentIndexNum}); 
		$(".slideBt li img").attr("src", "images/slideBotton_gray.png"); 
		$(".slideBt li").eq(parentIndexNum).children("img").attr("src", "images/slideBotton.png"); 
	});
	
});