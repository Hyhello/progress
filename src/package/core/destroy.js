/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：销毁
 */

export default function destroyMixin(Progress) {
	Progress.prototype.$destroy = function() {
		this.$el.removeChild(this.$ctx.canvas);
	};
}
