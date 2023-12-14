function linearSearch(arr: number[], index: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === index) {
        return i; 
      }
    }
  
    return -1; //wenn Zahl nicht gefunden wird
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const num = 10;
  
  const result = linearSearch(array, num);
  
  console.log(result); 
  