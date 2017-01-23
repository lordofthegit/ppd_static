define(['jquery', 'slick'], function($){
    var $ = require('jquery');
    $('.galeria-preview').slick({
		fade: true,
		slide: '.galeria-preview-slide',
		lazyLoad:  'progressive',
		prevArrow: '<img class="slick-arrow slick-prev" src="img/icons/arrow-left.svg">',
		nextArrow: '<img class="slick-arrow slick-next" src="img/icons/arrow-right.svg">',
	});

	$('.galeria-carousel').slick({
		slide: '.galeria-carousel-slide',
		asNavFor: '.galeria-preview',
		slidesToShow: 8,
		slidesToScroll: 3,
		focusOnSelect: true,
		prevArrow: '<img class="slick-arrow slick-prev" src="img/icons/arrow-left.svg">',
		nextArrow: '<img class="slick-arrow slick-next" src="img/icons/arrow-right.svg">',
	});
});
