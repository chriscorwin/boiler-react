var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  publicPath: '/assets/bundle',
  contentBase: path.resolve(__dirname, 'public'), 
  hot: true
}).listen(3000, 'localhost', function (err, result) {
  if (err) { console.log(err) }
  console.log('Listening at localhost:3000');
});
