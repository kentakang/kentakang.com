$(document).ready(function(){
	$('.portfolio').hide();
	$('#call_portfolio').click(function(){
		$('#portfolio').removeClass('animated slideOutLeft');
		$('#portfolio').show();
		$('#portfolio').addClass('animated slideInLeft');
		$('body').addClass('blur');
		$('#curtain').addClass('curtain');
	});
	$('#call_license').click(function(){
		$('#license').removeClass('animated slideOutLeft');
		$('#license').show();
		$('#license').addClass('animated slideInLeft');
		$('body').addClass('blur');
		$('#curtain').addClass('curtain');
	});
	$('.close_btn').click(function(){
		$('.portfolio').removeClass('animated slideInLeft');
		$('.portfolio').addClass('animated slideOutLeft');
		$('body').removeClass('blur');
		$('#curtain').removeClass('curtain');
	});
	$('#curtain').click(function(){
		$('.portfolio').removeClass('animated slideInLeft');
		$('.portfolio').addClass('animated slideOutLeft');
		$('body').removeClass('blur');
		$('#curtain').removeClass('curtain');
	});
});
