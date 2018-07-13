import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const __APP_ENV__ = process.env.APP_ENV;
const __APP_PUBLIC_PATH__ = process.env.APP_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

var BUILD_DIR = path.resolve('./build/server');
var APP_DIR = path.resolve('./application/server');

const config = {
  // Entry point of file, which file need to bundle
  entry:  APP_DIR + '/server.js',

  // Exclude built in package and include extention file like all .css file will be include
  // If you remove this, node modules or other things will be include, due to that error will come
  externals: [
		nodeExternals({ whitelist: [/\.css$/] }),
		/assetsManifest.json/,
	  ],

  // Mode is development for now
	mode: 'development',

	output: {
    // Resolve path where needs to be bundle
    path: BUILD_DIR,

    // Bundle File name
    filename: 'server.js',
  },


  module: {
    rules: [
      // Transpile .js file es6 to es5 and exclude node_module, we need to include that other wise error will come
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }] },
    ],
  },

	plugins: [
    // Its an optional plugin that tells the reloader to not reload if there is an error.
    // The error is simply printed in the console, and the page does not reload.
    // If you do not have this plugin enabled and you have an error, a red screen of death is thrown
    new webpack.NoEmitOnErrorsPlugin(),


    // A webpack plugin to remove/clean your build folder(s) before building
    new CleanWebpackPlugin(['./build/server']),
  ],

}

module.exports = config;