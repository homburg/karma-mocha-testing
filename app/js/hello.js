(function () {
	var app = angular.module("hello", []);

	/**
	 * Convert camelcase to underscore
	 */
	app.factory("camelToUnderscore", function() {
		return function (str) {
			str = String(str)

			var outStr = "";
			var char;
			for (var i = 0; i < str.length; i++) {
				char = str[i];
				if (/[A-Z]/.test(char)) {
					outStr += "_" + char.toLower();
				} else {
					outStr += char
				}
			}

			return outStr;
		};
	});
})();
