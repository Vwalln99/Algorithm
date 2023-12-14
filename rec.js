"use strict";
// 5!=120
function fak(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(fak(5));
//rekursiv
function fakRec(num) {
    if (num === 1) {
        return 1;
    }
    return fakRec(num - 1) * num;
}
console.log(fakRec(5));
//find numbers
const myNum = [1, [2, 3], [8, 15, 4], [5, 6, 7, 8, 9], 10];
function numInArr(arr, num) {
    return arr.some((element) => {
        if (Array.isArray(element)) {
            return numInArr(element, num);
        }
        return element === num;
    });
}
console.log(numInArr(myNum, 15));
//problem mit helper gelöst
function oddNumRec(numbers) {
    const oddNum = [];
    function helper(numbers) {
        if (numbers.length === 0)
            return oddNum;
        if (numbers[0] % 2 !== 0)
            oddNum.push(numbers[0]);
        helper(numbers.slice(1));
    }
    helper(numbers);
    return oddNum;
}
const allNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(oddNumRec(allNum));
//Übung 1 - schreiben Sie eine Rekursive Funktion die einen String entgegennimmt und ihn umgekehrt ausgibt
function reverseString(input) {
    if (input.length <= 1) {
        return input;
    }
    return input.charAt(input.length - 1)
        + reverseString(input.substring(0, input.length - 1));
}
const reversed = reverseString("Hallo");
console.log(reversed);
//Übung 2 - schreiben Sie eine Rekursive Funktion die überprüft,
//          ob ein Text von vorne und hinter das gleiche Wort ergibt (=Palindrome)
//          Die Funktion returned true oder false
function stringPalindrome(text) {
    if (text.length <= 1) {
        return true;
    }
    if (text[0] === text[text.length - 1]) { //abbruchbedingung
        return stringPalindrome(text.slice(1, -1));
    }
    else {
        return false;
    }
}
console.log(stringPalindrome("halloh"));
console.log(stringPalindrome("level"));
//Übung 3 - schreiben Sie eine Rekursive Funktion die someRecursive heißt und
//          ein Array und eine Callback Funktion entgegennimmt.
//          Die Funktion returned true wenn ein Wert im Array true ergibt, wenn er in die Callback Funktion eingegeben wird
//Übung 4 - schreiben Sie eine Funktion die ein Array bzw. ein Verschachteltes Array entgegennimmt
//          und alle Arrays darin auflöst. Die Funktion sollte flatten() heißen und ein einfaches
//          Array zurückgeben. z. B.: [3, [[[9, 0]]], 7] wird zu [3, 9, 0, 7].
//Übung 5 - schreiben Sie eine rekursive Funktion die ein Array mit Strings entgegennimmt und
//          alle Angangsbuchstaben der Strings in Großbuchstaben umwandelt. Die Funktion sollte capitalizeFirst() heißen.
//          z. B.: ['car','taco','banana'] wird zu ['Car','Taco','Banana']
function capitalizeFirst(arr) {
    if (arr.length === 0)
        return [];
    const lastWord = arr[arr.length - 1];
    const capitalizedLastWord = lastWord.charAt(0).toUpperCase() +
        lastWord.slice(1).toLowerCase();
    const result = capitalizeFirst(arr.slice(0, -1));
    result.push(capitalizedLastWord);
    return result;
}
const array1 = ["car", "taco", "banana", "gUmmybear", "coucH", "Bed"];
console.log(capitalizeFirst(array1));
//Übung 6 - erstellen Sie eine rekursive Funktion die aus einem verschachtelten Objekt alle geraden Zahlen sucht
//          und sie summiert. Die Funktion sollte nestedEvenSum() heißen.
//Interview prep
//allsum
function sumRange(num) {
    if (num === 1) {
        return 1;
    }
    return num + sumRange(num - 1);
}
console.log(sumRange(3));
//powerfunction
function power(base, exponent) {
    if (exponent == 0)
        return 1;
    return base * power(base, exponent - 1); //exponent -1 = der exponent wird um 1 reduziert bei jedem aufruf
}
console.log(power(2, 3));
//# sourceMappingURL=rec.js.map