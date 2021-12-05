const path = require("path");

module.exports = {
	mode: process.env.NODE_ENV,
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index.bundle.js",
		publicPath: "/",
	},
	devServer: {
		port: 3000,
		contentBase: "./dist",
		historyApiFallback: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10000,
						},
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
