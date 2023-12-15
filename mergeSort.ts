function merge(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++; 
    }
  
    return result;
  }
  console.log(result);
  
  function mergeSort(arr: number[]): number[] {
  
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    return merge(sortedLeft, sortedRight);
  }
  
  const arr1 = [64, 34, 25, 12, 22, 11, 90];
  const arr2 = mergeSort(arr1);
  
  console.log(arr2);