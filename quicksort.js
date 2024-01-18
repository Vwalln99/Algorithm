"use strict";
function pivot(arr, start = 0, end = arr.length - 1) {
    // Verwende das erste Element als Pivot
    const pivotValue = arr[start];
    let pivotIndex = start;
    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            // Erhöhe den Index des Pivot Index und tausche das aktuelle Element mit dem Element beim Pivot Index
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    // Tausche das Start-Element (Pivot) mit dem Pivot Index
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    // Abbruchbedingung: Wenn einer der Array-Teile weniger als 2 Elemente hat
    if (left < right) {
        // Erhalte den Pivot Index
        const pivotIndex = pivot(arr, left, right);
        // Rufe die quickSort Funktion rekursiv für den linken und rechten Teil auf
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
//# sourceMappingURL=quicksort.js.map