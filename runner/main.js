define({

	make : function (test) {
		var self, spec_paths, specifications, lib_paths, modules, is_done_loading
		self           = this
		modules        = []
		specifications = []
		spec_paths     = this.create_spec_inclusion_array({
			root  : test.spec_path,
			paths : test.path
		})
		lib_paths      = this.create_lib_inclusion_array({
			root      : test.lib_path,
			paths     : test.path
		})
		is_done_loading = function () { 
			if ( 
				specifications.length === spec_paths.length && 
				modules.length === lib_paths.length 
			) {
				for (var index = 0; index < specifications.length; index++) {
					specifications[index].make(modules[index])
				}
				self.run_jasmine()
			}
		}

		for (var index = 0; index < spec_paths.length; index++) {

			requirejs( [ spec_paths[index] ], function (module) {
				specifications = specifications.concat( module )
				is_done_loading()
			})
		}

		for (var index = 0; index < lib_paths.length; index++) { 
			requirejs( [ lib_paths[index] ], function (module) {
				modules = modules.concat( module )
				is_done_loading()
			})	
		}
	},

	create_lib_inclusion_array : function ( lib ) {
		var paths = []
		for ( var path in lib.paths ) {
			paths = paths.concat( lib.root +"/"+ lib.paths[path])
		}
		return paths
	},

	create_spec_inclusion_array : function ( spec ) {

		var paths
		paths = []

		for (var path in spec.paths ) { 
			paths = paths.concat( spec.root +"/"+ path )
		}

		return paths
	},

	run_jasmine : function () {
		var env, reporter
		env      = jasmine.getEnv();
		reporter = new jasmine.HtmlReporter({
			env: env,
			onRaiseExceptionsClick: function() { 
				queryString.setParam("catch", !env.catchingExceptions())
			},
			getContainer: function() { 
				return document.body
			},
			createElement: function() { 
				return document.createElement.apply(document, arguments)
			},
			createTextNode: function() { 
				return document.createTextNode.apply(document, arguments)
			},
			timer: new jasmine.Timer()
		})
		reporter.initialize()
		env.execute()
	},
})