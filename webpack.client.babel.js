import path from 'path';

const __APP_ENV__ = process.env.APP_ENV;
const __APP_PUBLIC_PATH__ = process.env.APP_PUBLIC_PATH;
const isProd = process.env.NODE_ENV === 'production';

var __BUILD_DIR__ = path.resolve(__dirname, './build/client');
var __APP_DIR__ = path.resolve(__dirname, './application/client');

const config = {
	entry: {
		main: __APP_DIR__ + '/client.js'
	},
	mode: 'production',
	output: {
		filename: 'bundle.client.js',
		path: __BUILD_DIR__,
		publicPath: __APP_PUBLIC_PATH__,
	},
	devServer: {
		contentBase: __BUILD_DIR__,
		headers: { 'Access-Control-Allow-Origin': '*' },
	},
};

module.exports = config;