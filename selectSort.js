"use strict";
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            const num = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = num;
        }
    }
    return arr;
}
const unsortArray = [64, 34, 25, 12, 22, 11, 90];
const sortArray = selectionSort(unsortArray);
console.log(sortArray);
//# sourceMappingURL=selectSort.js.map