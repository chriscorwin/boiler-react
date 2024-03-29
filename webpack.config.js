var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/js/main.js',

  output: {
    path: path.resolve('./public/assets/bundle'),
    filename: 'app.js'
  },

  // assumes all JavaScript files you edit will be in src/
  // when importing from src/<file>.js, only need to specify as <file>
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'components': __dirname + '/src/js/components',
      'pages': __dirname + '/src/js/pages',
      'styles': __dirname + '/src/sass',
    },
    root: path.resolve('./src'), // must be absolute path
    extensions: ['', '.js']
  },

  devtool: 'source-map', // source maps to ease debugging

  module: {
    loaders: [
      {
        // pre-process every *.js file (except for ones in
        // node_modules/) with Babel:
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader', // auto-refreshes browser
          'babel-loader?cacheDirectory&presets[]=react&presets[]=es2015&presets[]=stage-0' // invokes Babel with presets react, es6, and stage-0
        ]
      },
      {
        test: /\.scss$/,
        include: /src/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
