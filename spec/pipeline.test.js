import { expect } from 'chai';
import pipeline from '../src/lib/pipeline';

describe('#pipeline', () => {
  describe('No functions passed', () => {
    it('should return a function', () => {
      const composedFn = pipeline();
      expect(composedFn).to.be.a('function');
    });

    it('should return the same value when no list of functions are passed', () => {
      const composedFn = pipeline();
      expect(composedFn(10)).to.equal(10);
    });
  });

  describe('Only one functions passed', () => {
    it('should return the same value as the passed function when only one function is passed', () => {
      const testFn = value => value + 2;
      const composedFn = pipeline(testFn);
      expect(composedFn(10)).to.equal(testFn(10));
    });
  });

  describe('More than one functions passed', () => {
    const testFn1 = value => value + 10;
    const testFn2 = value => Math.pow(value, 2);
    const expectedValue = 144;
    const seed = 2;

    it('should return the correct value when a chain of functions are passed as args', () => {
      const composedFn = pipeline(testFn1, testFn2);
      expect(composedFn(seed)).to.equal(expectedValue);
    });

    it('should return the correct value when several functions are passed as one array', () => {
      const composedFn = pipeline([testFn1, testFn2]);
      expect(composedFn(seed)).to.equal(expectedValue);
    });
  });

  describe('Should fallback to lodash reducer when native reduce is not defined', () => {
    let cachedReduceFn = Array.prototype.reduce;

    before(() => {
      delete Array.prototype.reduce;
    });

    it('should return the correct value when a chain of functions are passed as args', () => {
      const testFn1 = value => value + 10;
      const testFn2 = value => Math.pow(value, 2);
      const expectedValue = 144;
      const seed = 2;
      const composedFn = pipeline(testFn1, testFn2);
      expect(composedFn(seed)).to.equal(expectedValue);
    });

    after(() => {
      Array.prototype.reduce = cachedReduceFn;
    });
  });

  describe('More than one functions passed and dealing with object', () => {
    const testFn1 = obj => Object.assign({}, obj, {newProperty1: 'foo'});
    const testFn2 = obj => Object.assign({}, obj, {newProperty2: 'bar'});

    it('should extend the object with expected properties', () => {
      const composedFn = pipeline(testFn1, testFn2);
      const result = composedFn({
        initialProperty: 'nice'
      });

      expect(result.initialProperty).to.equal('nice');
      expect(result.newProperty1).to.equal('foo');
      expect(result.newProperty2).to.equal('bar');
    });
  });
});
