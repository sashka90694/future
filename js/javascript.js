$(document).ready(function(){
	$('.c-window__items').on('click', function(){
		$('.c-window__items').removeClass('active');
		$(this).addClass('active');
	});
});