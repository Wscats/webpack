'use strict';

import './c';
import $ from 'jquery';
import './locallib';

console.log($('body'));

// Dynamic import for code splitting
import('lodash')
  .then(({ default: _ }) => {
    console.log('lodash', _);
  })
  .catch((error: Error) => console.error('An error occurred while loading the component', error));

/** Module A entry function. */
function fn(): void {
  console.log('a-------');
}

export default fn();