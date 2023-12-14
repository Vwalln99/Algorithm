function selectionSort(arr: number[]): number[] {
    const len = arr.length;
  
    function swap(index1: number, index2: number): void {
      const temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
  
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        swap(i, minIndex);
      }
    }
  
    return arr;
  }
  
  // Beispielaufruf
  const unsortArray = [64, 34, 25, 12, 22, 11, 90];
  const sortArray = selectionSort(unsortArray);
  
  console.log(sortArray);
  