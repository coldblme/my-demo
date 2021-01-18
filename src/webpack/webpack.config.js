const path = require("path");
module.exports = {
	entry: {
		main: path.join(__dirname, "../index.js"),
	},
	output: {
		path: path.join(__dirname, "dist"),
    filename: "js/[name]-[hash]" + ".js",
    chunkFilename: "js/[name]-[hash]" + ".js",
	},
	devServer: {
		contentBase: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				enforce: "pre",
				use: [
					{
						loader: "babel-loader",
          },
          {
            loader: "eslint-loader",
            options: {
              formatters: require("eslint-friendly-formatter"),
              emitWarning: false
            }
          }
				],
      },
      {
        test: /\.(css|less)$/,
        exclude: /node_modules/,
        include: /src/,
        use:[
          {
            loader: "style-loader"
          },
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.NODE_ENV === 'production',
              importLoaders: 2,
              localIdentName: '[name]-[local]-[hash:base64:5]',
              modules: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) =>{
                require('autoprefixer')()
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
		],
	},
};
