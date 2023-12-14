function bubbleSort(arr: number[]): number[] {

    function swap(index1: number, index2: number): void {
      const num = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = num;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
 
  console.log(sortedArray);
  