// Main Module. Add modules as you require
// Loads common code that includes config, then load the app logic for this page.
requirejs.config({
	baseUrl: './js'
});

require(['base'], function (base) {
    require(['app/lazyload-controller']);
    require(['app/popups']);
    require(['app/global-functions']);
    require(['app/galeria-controller']);
    require(['app/gallery-modal']);
});
