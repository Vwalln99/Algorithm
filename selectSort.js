"use strict";
function selectionSort(arr) {
    function swap(index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
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
const unsortArray = [64, 34, 25, 12, 22, 11, 90];
const sortArray = selectionSort(unsortArray);
console.log(sortArray);
//# sourceMappingURL=selectSort.js.map