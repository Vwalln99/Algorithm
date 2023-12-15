"use strict";
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currElement = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currElement;
    }
    return arr;
}
const unsortedArr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = insertionSort(unsortedArr);
console.log(sortedArr);
//# sourceMappingURL=insertSort.js.map