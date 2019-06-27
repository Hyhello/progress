const fs = require('fs');

console.log(
	111111111111,
	fs.readFileSync(process.env.HUSKY_GIT_PARAMS, 'utf-8')
);
