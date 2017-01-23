// This is a controller for handling all the required modules to enable and get working a component
define(function (require) {
    var $ = require('jquery');
    $('.gallery-villas').click(function(e){
    	$('.gallery-holder').animate({top: '-100vh'},300)
    });
    $('#close').click(function(e){
    	$('.gallery-holder').animate({top: '0vh'},300)
    })
});