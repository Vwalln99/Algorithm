"use strict";
function searchSubString(longString, shortString) {
    let count = 0;
    for (let i = 0; i < longString.length; i++) {
        for (let j = 0; j < shortString.length; j++) {
            if (longString[i + j] !== shortString[j]) {
                break;
            }
            if (j === shortString.length - 1) {
                count++;
            }
        }
    }
    if (count > 0) {
        return count;
    }
    else {
        return -1;
    }
}
const longString = "abcabcdabcde";
let shortString = "abc";
const wordCount = searchSubString(longString, shortString);
console.log(wordCount);
//# sourceMappingURL=substringSearch.js.map