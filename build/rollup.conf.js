const path = require('path');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const alias = require('rollup-plugin-alias');
const babel = require('rollup-plugin-babel');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');
const { terser } = require('rollup-plugin-terser');
const replace = require('rollup-plugin-replace');
const { eslint } = require('rollup-plugin-eslint');
const filesize = require('rollup-plugin-filesize');
const pkg = require('../package.json');

const pathResolve = dir => path.resolve(__dirname, '../', dir);
const version = process.env.VERSION || pkg.version;

const banner =
	'/*!\n' +
	` * hyProgress.js v${version}\n` +
	` * @license (c) 2018-${new Date().getFullYear()} Hyhello\n` +
	' * Released under the MIT License.\n' +
	' */';
const env = process.env.NODE_ENV || 'development';
const config = {
	context: pathResolve('/'),
	input: 'src/index.js',
	output: [
		{
			format: 'iife',
			name: 'Progress',
			file: pkg.main,
			sourcemap: true,
			banner: banner
		}
	],
	plugins: [
		resolve(),
		commonjs(),
		filesize(),
		alias({
			'@': pathResolve('src')
		}),
		eslint({
			formatter: require('eslint-friendly-formatter'),
			include: ['src/**/*.js']
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify(env)
		})
	]
};

if (env === 'development') {
	config.plugins.push(
		serve({
			open: true, // 是否打开浏览器
			contentBase: './', // 入口html的文件位置
			historyApiFallback: true, // Set to true to return index.html instead of 404
			host: 'localhost',
			port: 9527
		}),
		livereload({
			watch: 'dist/' //监听文件夹;
		})
	);
} else {
	config.plugins.push(
		terser({
			output: {
				ascii_only: true, // 仅支持ascii字符，非ascii字符将转成\u格式
				comments: function(node, comment) {
					var text = comment.value;
					var type = comment.type;
					if (type == 'comment2') {
						// multiline comment
						return /@preserve|@license|@(c)/i.test(text);
					}
				}
			},
			compress: {
				pure_funcs: ['func', 'console.log'] // 去掉console.log函数
			}
		})
	);
}

module.exports = config;
