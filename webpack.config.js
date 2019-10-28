const path = require("path");

module.exports = {
  entry: "./component/App.js",
  mode: "production",
  output: {
    filename: "App.js",
    path: path.resolve(__dirname, "./public/javascripts")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
