function isPalindrome(word: string): boolean {
  let j: number = word.length - 1;
  for (let i:number = 0; i < word.length; i += 1) {
    if (word.split('')[i] !== word.split('')[j]) {
      return false;
    }
    j -= 1;
  }
  return true;
}

/**
 * # palindromeCount | primary function
 * Counts characters in longest palindrome given within an array
 *
 * @param words given words list to check
 * @returns length of longest palindrome or undefined
 *
 * ## Usage
 * ```TypeScript
 * palindromeCount(['TACOCAT', '1001'])
 * // returns 7
 *
 * palindromeCount(['hello', 'World'])
 * // returns undefined
 * ```
 */
export function palindromeCount(words: string[]): number | undefined {
  const pali: string[] = [];
  words.forEach((word) => {
    if (isPalindrome(word.toUpperCase())) {
      pali.push(word);
    }
  });

  return pali.length === 0
    ? undefined
    : pali.sort().reverse()[0].length;
}
