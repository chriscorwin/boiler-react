var path = require('path');
var webpack = require('webpack');

var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');

var SERVER_PORT = process.env.SERVER_PORT || 3001;

new WebpackDevServer(webpack(config), {
  publicPath: '/assets/bundle',
  contentBase: path.resolve(__dirname, 'public'),
  hot: true
}).listen(SERVER_PORT, 'localhost', function (err, result) {
  if (err) { console.log(err) }
  console.log('Listening at localhost:'+SERVER_PORT);
});
