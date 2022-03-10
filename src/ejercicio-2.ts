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
