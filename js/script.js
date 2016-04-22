$(document).ready(function(){
	$('.portfolio').hide();
	$('#call_portfolio').click(function(){
		$('.portfolio').removeClass('animated slideOutLeft');
		$('.portfolio').show();
		$('.portfolio').addClass('animated slideInLeft');
		$('body').addClass('blur');
	});
	$('.close_btn').click(function(){
		$('.portfolio').removeClass('animated slideInLeft');
		$('.portfolio').addClass('animated slideOutLeft');
		$('body').removeClass('blur');
	});
});