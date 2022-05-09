$(document).ready(function() {
	
	Inputmask("+7 (999) 999-99-99").mask($('#phone'));

	const portfolio_slider = new Swiper('.portfolio__slider', {
		centeredSlides: true,
		slideToClickedSlide: true,
		slidesPerView: 3,
		speed: 1000,
		spaceBetween: 60,
		initialSlide: 4,
		loop: true,
		navigation: {
			nextEl: '.portfolio__slider-next',
			prevEl: '.portfolio__slider-prev',
		},
	});

});