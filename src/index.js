/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：初始化
 */

// import { isElement, extend } from './utils';
import Circle from './package/circle';
import { warn } from './utils';
// console.log(new Circle());

const Progress = function(el, options) {
	if (process.env.NODE_ENV !== 'production' && !(this instanceof Progress)) {
		warn(
			'Progress is a constructor and should be called with the `new` keyword'
		);
		return;
	}
	return new Circle(el, options);
	// let defaults = {};
	// const $dpr = window.devicePixelRatio || 1;
	// defaults.$el = isElement(el) ? el : document.querySelector(el);
	// const rect = defaults.$el.getBoundingClientRect();
	// if (!rect.height) {
	// 	console.warn('parent box must has height');
	// 	return;
	// }
	// defaults = options || {}; // 校验
	// // Code._checkConf(options);
	// defaults._canvas = document.createElement('canvas');
	// defaults._canvas.innerHTML = '您的浏览器版本不支持canvas';
	// defaults.$el.appendChild(defaults._canvas);
	// defaults.$ctx = defaults._canvas.getContext('2d'); // 配置
	// defaults = extend(defaults, options);
	// defaults.width = rect.width;
	// defaults.height = rect.height; // 配置宽高
	// defaults._canvas.width = rect.width * $dpr;
	// defaults._canvas.height = rect.height * $dpr;
	// defaults._canvas.style.width = `${rect.width}px`;
	// defaults._canvas.style.height = `${rect.height}px`;
	// defaults.$ctx.scale($dpr, $dpr); // 开始draw
	// console.log(defaults);
};

Progress.version = '__VERSION__';

export default Progress;
