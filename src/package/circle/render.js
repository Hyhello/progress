/**
 * 作者：yeshengqiang
 * 时间：2019-06-25
 * 描述：render
 */

const render = Circle => {
	Circle.prototype.render = () => {
		this.$ctx.beginPath();
		this.$ctx.save();
		this.$ctx.translate(this.$conf.width / 2, this.$conf.height / 2);

		this.$ctx.arc(0, 0, 50, 0, Math.PI * 2);
		this.$ctx.stroke();

		this.$ctx.restore();
	};
};

export default render;
