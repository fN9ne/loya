$(document).ready(function() {

	let $grid = $('.our-projects__content').isotope({
		layoutMode: 'packery',
		itemSelector: '.our-project',
		gutter: 25,
	});

	$grid.imagesLoaded().progress(function() {
		$grid.isotope('layout');
	});

});