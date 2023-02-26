
$(document).ready(function() {
	$('.burger').click(function(){
		$('.nav-links').toggleClass('activeMod');
		if ($('.nav-links').hasClass('activeMod')) {
			$('body').addClass('body-mod');
		}
	});
	$('.nav-links').click(function(){
		if ($(this).hasClass('activeMod')){
			$(this).removeClass('activeMod');
			$('body').removeClass('body-mod');
		}
	});

	$('.slider').slick({
		arrows:false,
		dots: true,
		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		centerMode: true,
  		speed:1000,
  		autoplay: true,
  		autoplaySpeed:3000,
  		centerMode:true,
  		initialslide:1,
	});
});

