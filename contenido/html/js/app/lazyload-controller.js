// This is a controller for handling all the required modules to enable and get working a component
require(['jquery', 'lazyload'], function($){
    
    $(".lazy").lazyload({
		effect : "fadeIn",
		failure_limit : 10,
		threshold : 150,
        load : function(){
            setTimeout(function() {
                $(document).foundation('equalizer', 'reflow');
                //$(window).trigger('resize');
            }, 150);
		}
	});
    
});