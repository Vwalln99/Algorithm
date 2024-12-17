function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
    const pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivotValue > arr[i]) {
    
        pivotIndex++;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      }
    }
  

    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  
    return pivotIndex;
  }
  
  function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1): number[] {
      
    if (left < right) {

      const pivotIndex = pivot(arr, left, right);
  
    
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = quickSort(unsortedArray);
  
  console.log(sortedArray);
  
