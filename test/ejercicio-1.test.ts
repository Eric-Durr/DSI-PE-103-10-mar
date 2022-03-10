import { describe, it } from 'mocha';
import { expect } from 'chai';
import { performNichomachusClassification } from '../src/ejercicio-1'; // eslint-disable-line

type Nichomachus = 'PERFECT' | 'ABUNDANT' | 'DEFICIENT' | undefined;

describe('Apply Nichomachus Classifiation into an array of numbers', () => {
  const pe: Nichomachus = 'PERFECT';
  const ab: Nichomachus = 'ABUNDANT';
  const de: Nichomachus = 'DEFICIENT';
  const un: Nichomachus = undefined;
  
  it('Array [6, 28, 496, 8128] should return [PERFECT, PERFECT, PERFECT, PERFECT]', () => {
    expect(performNichomachusClassification([6, 28, 496, 8128]))
      .to.be.eql([pe, pe, pe, pe]);
  });
  it('Array [12, 28, 18, 8128] should return [ABUNDANT, PERFECT, ABUNDANT, PERFECT]', () => {
    expect(performNichomachusClassification([12, 28, 18, 8128]))
      .to.be.eql([ab, pe, ab, pe]);
  });
  it('Array [2, 28, 4, 8128] should return [DEFICIENT, PERFECT, DEFICIENT, PERFECT]', () => {
    expect(performNichomachusClassification([2, 28, 4, 8128]))
      .to.be.eql([de, pe, de, pe]);
  });
  it('Array [-2, 28, 4, 8128] should return [undefined, PERFECT, DEFICIENT, PERFECT]', () => {
    expect(performNichomachusClassification([-2, 28, 4, 8128]))
      .to.be.eql([un, pe, de, pe]);
  });
});
