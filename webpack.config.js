const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
    
        {
            test: /\.s?css$/,
            use: [{
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: (resourcePath, context) => {
                    return path.relative(path.dirname(resourcePath), context) + '/';
                }
            }
        },
              "css-loader",
              "sass-loader"
        ]
        }
    ]
},
plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
      chunkFilename: "_.css"
    })
]
};