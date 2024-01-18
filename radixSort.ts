function getDigit(num: number, place: number): number {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (const num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(arr: number[]): number[] {
  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of arr) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    arr = buckets.reduce((acc, bucket) => acc.concat(bucket), []);
  }

  return arr;
}


const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = radixSort(unsortedArray);

console.log( sortedArray);
