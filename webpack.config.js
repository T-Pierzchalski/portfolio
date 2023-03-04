const path = require("path");

module.exports = {
	entry: {
		main: "./src/js/main.js",
		bootstrap: "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "src", "js"),
	},
};
