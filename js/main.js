$(function () {
	$(window).scroll(function () {
		$('#expec .section-title').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#expec .perspective').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("bounceIn");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .section-title').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});

	$(window).scroll(function () {
		$('#mail .input-name').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input-email').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input-tel').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .input-travels').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#mail .btn-form').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("fadeInDown");
			}
		});
	});
	$(window).scroll(function () {
		$('#footer .credits').each(function () {
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 650) {
				$(this).addClass("bounceIn to");
			}
		});
	});
})