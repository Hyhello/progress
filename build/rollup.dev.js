/**
 * 作者：yeshengqiang
 * 时间：2019-06-22
 * 描述：dev
 */

const rollup = require('rollup');
const config = require('./rollup.base');
const serve = require('rollup-plugin-serve');
const livereload = require('rollup-plugin-livereload');

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

// const watcher = rollup.watch(watchOptions);
// watcher.on('event', event => {
//     // event.code 会是下面其中一个：
//     //   START        — 监听器正在启动（重启）
//     //   BUNDLE_START — 构建单个文件束
//     //   BUNDLE_END   — 完成文件束构建
//     //   END          — 完成所有文件束构建
//     //   ERROR        — 构建时遇到错误
//     //   FATAL        — 遇到无可修复的错误
// });
