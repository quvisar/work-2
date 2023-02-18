
// "use strict"

// let eye = 'green' ;
// let userName = 'Vasia';
// let user = userName; 
// console.log(user);

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
});

function JavaScript() {
	
}

JavaScript();
