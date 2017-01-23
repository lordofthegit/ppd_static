// Contains all the base scripts required for all modules
requirejs.config({
	baseUrl: './js',
	shim: {
		'jquery': {
			exports: '$'
		},
		'foundation': {
			deps: ['jquery']
		},
		'lazyload': {
			deps: ['jquery']
		},
        'magnificPopup': {
			deps: ['jquery']
		},
	},
	paths: {
		'jquery': 'vendor/jquery',
		'modernizr': 'vendor/modernizr',
        'fastclick': 'vendor/fastclick',
        'placeholder': 'vendor/placeholder',
		'foundation': 'foundation/foundation.min',
		'lazyload': 'app/model/lazyload',
		'slick': 'app/model/slick.min',
        'magnificPopup': 'app/model/magnific-popup'
	}
});

require(['modernizr'], function(modernizr) {
});

var hasTouch = 'ontouchstart' in window;
if(hasTouch){
    require(['fastclick'], function(fastclick) {
        var FastClick = require('fastclick');
        FastClick.attach(document.body);
    });
}

// IE9 and below specific scripts
var isIE = document.all && document.addEventListener && !window.atob;
if (isIE) {
    require(['placeholder'], function(ieScript) {
    });
}

require(['jquery', 'foundation'], function($){
	$(document).foundation();
});