
function binarySearch(arr: number[], num: number): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (arr[middle] === num) {
        return middle;
      } else if (arr[middle] < num) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  
    return -1; 
  }
  
  const arrayB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numB = 5;
  
  const resultB = binarySearch(arrayB, numB);
  
  console.log(resultB);
  