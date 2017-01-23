// This contains the config for building your project for production. It concatenates and minifies all scrips and dependencies.
// Modify to match your needs.
({
    baseUrl: "../",
    paths: {
        'jquery': 'vendor/jquery',
        'modernizr': 'vendor/modernizr',
        'fastclick': 'vendor/fastclick',
		'foundation': 'foundation/foundation.min',
        'placeholder': 'vendor/placeholder'
    },
    name: "view/main",
	mainConfigFile: '../view/main.js',
	optimize: "uglify2",
	preserveLicenseComments: false,
    findNestedDependencies: true,
//	generateSourceMaps: true,
    out: "../view/main.min.js"
})