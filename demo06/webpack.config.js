module.exports = {
  entry: './js/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders:[
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  }
};
