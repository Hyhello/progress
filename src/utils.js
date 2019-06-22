/**
 * 作者：yeshengqiang
 * 时间：2019-06-23
 * 描述：工具
 */
// @flow
export const isElement = (el: string): Boolean => {
	return typeof el === 'object' && el.nodeType === 1;
};
console.log(isElement);
isElement(1);
