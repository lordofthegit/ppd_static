// This is a controller for handling all the required modules to enable and get working a component
require(['jquery'], function($){
     
    function equalHeight(group) {
        var tallest = 0;
        group.css("height","auto");
        group.each(function() {
            var thisHeight = $(this).height();
            if(thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);

    }

    equalHeight($(".locations-row .columns"));
    
    var resizeTimer_1;
    $(window).resize(function() {
        clearTimeout(resizeTimer_1);
        resizeTimer_1 = setTimeout(function() {
            equalHeight($(".locations-row .columns"));
        }, 20);
    });
    
    $(window).bind('orientationchange', function() {
        equalHeight($(".locations-row .columns"));
    });
    
});