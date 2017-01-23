// This is a controller for handling all the required modules to enable and get working a component
require(['jquery', 'magnificPopup'], function($){

    $(".video-toggle").magnificPopup({ 
        disableOn: 700,
        type: 'inline',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

});
