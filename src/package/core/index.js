/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：core
 */

import { isElement, tip } from '@/utils/index';

export default function initMixin(Progress) {
	Progress.prototype._init = function(el) {
		const $dpr = window.devicePixelRatio || 1;
		this.$el = isElement(el) ? el : document.querySelector(el);
		const rect = this.$el.getBoundingClientRect();
		if (!rect.height) {
			tip('parent box must has height');
		}
		this._canvas = document.createElement('canvas');
		this._canvas.innerHTML = '您的浏览器版本不支持canvas';
		this.$el.appendChild(this._canvas);
		this.$ctx = this._canvas.getContext('2d'); // 配置
		this._canvas.width = rect.width * $dpr;
		this._canvas.height = rect.height * $dpr;
		this._canvas.style.width = `${rect.width}px`;
		this._canvas.style.height = `${rect.height}px`;
		this.$ctx.scale($dpr, $dpr); // 开始draw
	};
}
