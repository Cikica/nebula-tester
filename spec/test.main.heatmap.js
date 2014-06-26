define({
	make : function ( module ) {
		console.log(module)
		describe("something", function () {
			it("stuff", function() {
				expect(true).toBe(true)
			})
		})
	}
})