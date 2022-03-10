import { describe, it } from 'mocha';
import { expect } from 'chai';
import { palindromeCount } from '../src/ejercicio-2'; // eslint-disable-line

describe('Filtering palindromes in array', () => {
  it('Array [\'TACOCAT\', \'1001\'] should return 7', () => {
    expect(palindromeCount(['TACOCAT', '1001']))
      .to.be.eql(7);
  });
  it('Array [\'Hello\', \'world\'] should return undefined', () => {
    expect(palindromeCount(['Hello', 'world']))
      .to.be.eql(undefined);
  });
});
