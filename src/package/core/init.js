/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：core
 */

import { isElement, tip, extend } from '@/utils/index';

export default function initMixin(Progress) {
	Progress.prototype._init = function(el, options) {
		const $dpr = window.devicePixelRatio || 1;
		this.$el = isElement(el) ? el : document.querySelector(el);
		const rect = this.$el.getBoundingClientRect();
		if (!rect.height) {
			tip('parent box must has height');
		}
		const _canvas = document.createElement('canvas');
		_canvas.innerHTML = '您的浏览器版本不支持canvas';
		this.$el.appendChild(_canvas);
		this.$ctx = _canvas.getContext('2d'); // 配置

		this.$conf = extend({}, options);

		_canvas.width = rect.width * $dpr;
		_canvas.height = rect.height * $dpr;
		_canvas.style.width = `${rect.width}px`;
		_canvas.style.height = `${rect.height}px`;
		this.$ctx.scale($dpr, $dpr); // 开始draw
	};
}
