import { reduce as lodashReduce } from 'lodash';

export default function reduce(...theArgs) {
  if ('reduce' in Array.prototype) {
    const arr = theArgs[0];
    return arr.reduce(...theArgs.slice(1));
  }

  return lodashReduce(...theArgs);
}
