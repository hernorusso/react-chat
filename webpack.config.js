module.exports = {
  entry: "./client/main.jsx",
  output:{
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  module:{
    loaders: [
      { test: /\.js?/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }      
    ]
  }
};
