"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Algorithm!");
const fs_1 = __importDefault(require("fs"));
const fileName = 'Daten.txt';
let fileContent = fs_1.default.readFileSync(fileName, 'utf8');
let fileArray = fileContent.split('\n'); //macht aus text array und trennt es beim umbruch
fileArray.forEach((line, index) => {
    fileArray[index] = line.trim(); //entfernt leerzeichen aus der data
});
//erste und letzte ziffer extrahieren aus fileArray
//und verbinden (4 und 4 = 44, wenn nur eine zahl dann zahl verdoppeln 6=66)
//alle gefundenen zahlen zusammenzählen
function getStr(data) {
    data.forEach(line => {
        const firstNum = getFirstNum(line);
        const lastNum = getLastNum(line);
        const sum1 = firstNum.toString() + lastNum.toString();
        console.log(sum1);
    });
}
getStr(fileArray);
function getFirstNum(line) {
    for (let i = 0; line.length; i++) {
        let num = Number(line[i]);
        if (!isNaN(num)) {
            return num;
        }
    }
}
function getLastNum(line) {
    for (let i = line.length - 1; i >= 0; i--) {
        let num = Number(line[i]);
        if (!isNaN(num)) {
            return num;
        }
    }
}
function getSum(data) {
    let totalSum = 0;
    data.forEach(line => {
        const firstNum = getFirstNum(line);
        const lastNum = getLastNum(line);
        const sum1 = firstNum.toString() + lastNum.toString();
        totalSum += parseInt(sum1, 10);
    });
    return totalSum;
}
const sum = getSum(fileArray);
console.log(sum);
//# sourceMappingURL=findNums.js.map