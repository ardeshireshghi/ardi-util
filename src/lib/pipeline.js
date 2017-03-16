import reduce from './reduce';

export default function pipeline(...args) {
  const fns = (Array.isArray(args[0])) ? args[0] : args;
  const composedFn = seed => reduce(fns, (result, fn) => fn(result), seed);

  return composedFn;
}
