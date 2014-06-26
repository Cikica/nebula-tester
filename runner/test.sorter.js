define({

	make : function (sort) {

		var sorted, self, library
		
		// self    = this
		// library = this.make_library_module_object({
		// 	path   : sort.library_path,
		// 	module : sort.library
		// })
		// library = this.loop_array({
		// 	array    : sort.library_path,
		// 	start_at : 0,
		// 	into     : library,
		// 	if_done  : function (loop) {
		// 		return loop.into
		// 	},
		// 	else_do  : function (loop) {
		// 		self.deal_with_define({
		// 			library : loop.into,
		// 			module  : sort.library[loop.start_at]
		// 		})
		// 		loop.start_at += 1
		// 		return loop
		// 	}
		// })
		// sorted = this.loop_array({
		// 	array    : sort.path,
		// 	start_at : 1,
		// 	into     : [],
		// 	if_done  : function (loop) {
		// 		return loop.into
		// 	},
		// 	else_do  : function (loop) {
		// 		var module_name
		// 		module_name   = self.find_component_destination_and_insert_it({
		// 			first_module : sort.module[0],
		// 			this_module  : sort.module[loop.start_at],
		// 			module_path  : loop.array[loop.start_at],
		// 			library      : library
		// 		})
		// 		loop.into     = loop.into.concat(module_name)
		// 		loop.start_at += 1
		// 		return loop
		// 	}
		// })
		// self.deal_with_define({
		// 	module  : sort.module[0],
		// 	library : library
		// })
		// window.heatmap = sort.module[0].make(window.heatmap)
		// return sorted
	}
})