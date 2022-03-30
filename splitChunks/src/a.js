require('./c.js');
require('./locallib.js');
// const _ = require('lodash');
const $ = require('jquery');

console.log($('body'));

// console.log('lodash', _)
import('lodash')
    .then(({ default: _ }) => {
        console.log('lodash', _)

        return element;
    })
    .catch((error) => 'An error occurred while loading the component');
function fn() {
    console.log('a-------');
}

module.exports = fn();