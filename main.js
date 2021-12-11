const _ = require('lodash');
const items=[1,[2,[4],5,4]];

const newitems = _.flattenDeep(items);
console.log(newitems);
console.log("adding message from git edit windows");
