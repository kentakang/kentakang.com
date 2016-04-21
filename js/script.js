$(document).ready(function(){
	$('.portfolio').hide();
	$('#call_portfolio').click(function(){
		$('.portfolio').show();
		$('.portfolio').addClass('animated slideInLeft');
		$('body').addClass('blur');
	});
});