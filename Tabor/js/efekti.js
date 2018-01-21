$(document).ready(function(){

	$("#hoverImage").hover(
	function(){
		$(this).css("opacity",0.7);
	},
	function(){
		$(this).css("opacity",1);
	});

	$("#trip").hover(
		function(){
			$(this).css({"width":"200px","height":"100px"});
		},
		function(){
			$(this).css({"width":"150px","height":"72px"});
	});

	$(".instaBlok img").hover(
		function(){
			$(this).css("opacity",0.85);
			$(this).css({"width":"175px","height":"178px"});
		},
		function(){
			$(this).css("opacity",1);
			$(this).css({"width":"171px","height":"175px"});
	});

	$("#lightgallery img").hover(
		function(){
			$(this).css("opacity",0.85);
		},
		function(){
			$(this).css("opacity",1);
	});

	$("#naKlik").click(function(){
		$(".kontaktForma").css("visibility","hidden");
		alert("Poruka je uspesno poslata, odgovor cete dobiti posle 48h. Pozdrav!")
	});
});