'use strict';

/** Local project library. */
export interface LocalLib {
  info: () => void;
}

console.log('locallib');

const locallib: LocalLib = {
  info: (): void => {
    console.log('This is my project lib');
  },
};

export default locallib;