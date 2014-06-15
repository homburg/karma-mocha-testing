describe("hello angular module", function () {

	beforeEach(function () {
		module("hello")
	});

	describe("camelToUnderscore factory", function () {
		it("should produce a function", inject(function (camelToUnderscore) {
			expect(camelToUnderscore).to.be.a("function")
		}));

		it.skip("should take and produce strings", inject(function (camelToUnderscore) {
			// TODO...
			expect(true).to.be.false;
			// expect(camelToUnderscore("fisk")).to.equal(...")
		}));
	});
});
