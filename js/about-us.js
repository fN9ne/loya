$(document).ready(function() {

	const about_us_slider = new Swiper('.our-team__slider', {
		centeredSlides: true,
		loop: true,
		slideToClickedSlide: true,
		slidesPerView: 3,
		speed: 1000,
		spaceBetween: 70,
		initialSlide: 4,
		navigation: {
			nextEl: '.our-team__arrow-next',
			prevEl: '.our-team__arrow-prev',
		},
	});

});