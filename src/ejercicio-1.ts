type Nichomachus = 'PERFECT' | 'ABUNDANT' | 'DEFICIENT' | undefined;

/**
 * # performNuchomachusClassification | primary function
 * Turns array of numbers into array of classifications
 *
 * @param numList given number list
 * @returns array of custom Nichomachus type which contains each classified number
 *
 * ## Usage
 * ```TypeScript
 * performNichomachusClassification([6, 28, 496, 8128])
 * // returns [PERFECT, PERFECT, PERFECT, PERFECT]
 * ```
 */

export function performNichomachusClassification(
  numList: number[],
): Nichomachus[] {
  const classifiation: Nichomachus[] = [];
  numList.forEach((num) => {
    if (num < 0 || !Number.isInteger(num)) {
      classifiation.push(undefined);
    } else {
      const div: number[] = [];
      for (let i = 0; i < num; i += 1) {
        if (Number.isInteger(num / i)) {
          div.push(i);
        }
      }
      if (div.reduce((a, b) => a + b) === num) {
        classifiation.push('PERFECT');
      }
      if (div.reduce((a, b) => a + b) < num) {
        classifiation.push('DEFICIENT');
      }
      if (div.reduce((a, b) => a + b) > num) {
        classifiation.push('ABUNDANT');
      }
    }
  });
  return classifiation;
}
