/**
 * 作者：yeshengqiang
 * 时间：2019-06-23
 * 描述：工具库
 */

// 检测是否是element
export const isElement = el => {
	return typeof el === 'object' && el.nodeType === 1;
};
