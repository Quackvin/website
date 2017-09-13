$(document).ready(function(){
	var pjs;
	$.getJSON("../data/particle.json", function(data){
		particlesJS("heading",data);
	});
	
	$(window).scroll(function(){
		if($(window).width()>550){
			if($("#body1").offset().top < $(window).scrollTop()){
				$("#body1").css("position","fixed");
				$("#body1").css("top","5%");
			}
			else if ($(window).scrollTop() < $(window).height()/4){
				$("#body1").css("position","absolute");
				$("#body1").css("top","25vw");
			}
		}
	})
	$(window).on('resize',function(){
		if($(window).width()>550){
			if ($(window).scrollTop() < $(window).height()/4){
				$("#body1").css("position","absolute");
				$("#body1").css("top","25vw");
			}
			else{
				$("#body1").css("position","fixed");
				$("#body1").css("top","5%");
			}
		}
		else{
			$("#body1").css("position","absolute");
			$("#body1").css("top","70vw");
		}
	});
});