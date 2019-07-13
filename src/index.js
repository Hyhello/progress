/**
 * 作者：Hyhello
 * 时间：2019-07-13
 * 描述：初始化
 */

import { warn } from '@/utils/index';
import initMixin from '@/package/core/init';
import destroyMixin from '@/package/core/destroy';

const Progress = function(el, options) {
	if (!(this instanceof Progress)) {
		warn(
			'Progress is a constructor and should be called with the `new` keyword'
		);
	}
	this._init(el, options);
};

initMixin(Progress);
destroyMixin(Progress);

Progress.version = '__VERSION__';

export default Progress;
