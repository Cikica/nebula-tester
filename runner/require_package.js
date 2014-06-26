(function (load_spectrum) {

	var current_scripts, this_script, package_directory

	current_scripts   = document.getElementsByTagName("script")
	this_script       = current_scripts[current_scripts.length-1]
	package_directory = this_script.getAttribute("data-directory")

	// window.heatmap = {
	// 	heatmaps : [],
	// 	create    : function (make) {
	// 		window.heatmap.heatmaps = window.heatmap.heatmaps.concat(make)
	// 	}
	// }

	if ( typeof define === 'function' && define.amd) {
		load_spectrum(package_directory)
	} else {

		var require_js_script

		require_js_script        = document.createElement("script")
		require_js_script.src    = package_directory + "/require.js"
		require_js_script.onload = function () {
			load_spectrum(package_directory)
		}
		document.head.appendChild(require_js_script)
	}


}(function (package_directory) {
	window.requirejs([ package_directory + "/configuration", package_directory + "/main"], function (configuration, main) {
		main.make(configuration)
	})

}))