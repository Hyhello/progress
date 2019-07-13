/**
 * 作者：yeshengqiang
 * 时间：2019-06-26
 * 描述：别名
 */
const { convertSep, pathResolve } = require('./utils');

module.exports = {
	'@': convertSep(pathResolve('./src'), '/')
};
