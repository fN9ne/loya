$(window).on('load', function() {
	setTimeout(() => {
		$('.preloader').fadeOut(250);
		$('body').removeClass('_lock');
	}, 500);
});

$(document).ready(function() {

	const cursor = $('#cursor');
	const aura = $('#aura');
	let mouseX = mouseY = posX = posY = 0;
	let hoverAnim = $('a, button, input, label, .swiper-slide-next, .swiper-slide-prev');
	function mouseCoords(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;
	};
	gsap.to({}, .01, {
		repeat: -1,
		onRepeat: () => {
			posX += (mouseX - posX) / 5;
			posY += (mouseY - posY) / 5;
			gsap.set(cursor, {
				css: {
					left: mouseX,
					top: mouseY,
				},
			});
			gsap.set(aura, {
				css: {
					left: posX - 24,
					top: posY - 24,
				}
			});
		}
	});
	hoverAnim.on('mouseover', function() {
		cursor.addClass('active');
		aura.addClass('active');
	});
	hoverAnim.on('mouseout', function() {
		cursor.removeClass('active');
		aura.removeClass('active');
	});
	$(document).on('mousemove', function(e) {
		mouseCoords(e);
		cursor.removeClass('hidden');
		aura.removeClass('hidden');
	});
	$(document).on('mouseout', function() {
		cursor.addClass('hidden');
		aura.addClass('hidden');
	});

	$(document).on('click', 'a:not([href^="#"])', function(e) {
		e.preventDefault();
		let path = $(this).attr('href');
		$('body').addClass('_lock');
		$('.preloader').fadeIn(250);
		setTimeout(() => {
			location = path;
		}, 300);
	});

	$(document).on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 80,
		}, 750, 'swing');
	});

	$('input, textarea').on('blur focus', function() {
		let val = $(this).val();
		if (val.length > 0) {
			$(this).parent().addClass('_active');
		} else {
			$(this).parent().removeClass('_active');
		}
	});

	parallax($('.welcome'), 'top', $('.welcome__fade'))

	function parallax(parent, direction, el, mode = 0) {
		let pos = parent.offset(),
		elem_left = pos.left,
		elem_top = pos.top,
		elem_width = parent.outerWidth(),
		elem_height = parent.outerHeight(),
		speed = el.attr('data-speed');
		$(window).on('scroll', function() {
			let topPos = $(window).scrollTop() - elem_top;
			topPos/= 2;
			topPos/= speed;
			if (direction == 'top') {
				el.css('transform', `translateY(${-topPos}px)`);
			}
			if (direction == 'bottom') {
				el.css('transform', `translateY(${topPos}px)`);
			}
			if (direction == 'left') {
				el.css('transform', `translateX(${-topPos}px)`);
			}
			if (direction == 'right') {
				el.css('transform', `translateX(${topPos}px)`);
			}
		});
	}

});