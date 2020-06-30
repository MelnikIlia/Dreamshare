$('#log-in').click(function(){
	$('.modal-register').css('display', 'flex').hide().fadeIn(200);
	$('.form-login').css('display', 'flex');
	$('body').css('overflow', 'hidden');
});

$('#sign-up').click(function(){
	$('.modal-register').css('display', 'flex').hide().fadeIn(200);
	$('.form-sign-up').css('display', 'flex');
	$('body').css('overflow', 'hidden');
});

$('.modal-close').click(function(){
	$('.modal-register').fadeOut(200);
	$('.form-sign-up, .form-login').css('display', 'none');
	$('body').css('overflow', 'auto');
});

(function ibg() {
	$.each($(".ibg"), function (index, val) {
		if ($(this).find("img").attr("data-src").length > 0) {
			$(this).css(
				'background-image',
				'url("' + $(this).find("img").attr("data-src") + '")'
			);
		} else if ($(this).find("picture").length > 0) {
			$(this).css(
				'background-image',
				'url("' + $(this).find("source").attr("srcset") + '")'
			);
		} else if ($(this).find("img").length > 0) {
			$(this).css(
				'background-image',
				'url("' + $(this).find("img").attr("src") + '")'
			);
		}
	});
})();

new WOW({mobile: false}).init();
