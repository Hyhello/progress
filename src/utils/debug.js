/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：debug
 */

import { noop } from './vars';
// eslint-disable-next-line import/no-mutable-exports
export let warn = noop;
// eslint-disable-next-line import/no-mutable-exports
export let tip = noop;

if (process.env.NODE_ENV !== 'production') {
	warn = function(msg) {
		console.error(`[Progress warn]：${msg}`);
	};
	tip = function(msg) {
		console.error(`[Progress tip]：${msg}`);
	};
}
