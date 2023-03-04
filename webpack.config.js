const path = require("path");

module.exports = {
	entry: {
		bootstrap: path.resolve(
			__dirname,
			"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js/"
		),
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "src/js"),
	},
};
