/**
 * 作者：yeshengqiang
 * 时间：2019-06-23
 * 描述：工具库
 */

import { _hasOwn, _assign } from './vars';

// 检测是否是element
export const isElement = el => {
	return typeof el === 'object' && el.nodeType === 1;
};

// oneOf
export const oneOf = (target, list) => {
	return list.some(item => item === target);
};

// 继承
export const extend = (target, resource) => {
	try {
		return _assign.apply(Object, arguments);
	} catch (error) {
		for (const i in resource) {
			if (_hasOwn.call(resource, i)) {
				target[i] = resource[i];
			}
		}
		return target;
	}
};

// 定义属性
export const _defineProperty = (obj, key, value) => {
	return Object.defineProperty(obj, key, {
		value,
		enumerable: true
	});
};
