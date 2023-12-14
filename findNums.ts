console.log("Hello Algorithm!");

import fs from 'fs';

const fileName: string = 'Daten.txt';
let fileContent = fs.readFileSync(fileName, 'utf8');
let fileArray: string[] = fileContent.split('\n'); //macht aus text array und trennt es beim umbruch

fileArray.forEach((line, index) => {
    fileArray[index] = line.trim(); //entfernt leerzeichen aus der data
})

//erste und letzte ziffer extrahieren aus fileArray
//und verbinden (4 und 4 = 44, wenn nur eine zahl dann zahl verdoppeln 6=66)
//alle gefundenen zahlen zusammenzählen
function getStr(data: string[]) {
    data.forEach(line => {
        const firstNum = getFirstNum(line);
        const lastNum = getLastNum(line);
        const sum1=firstNum.toString()+lastNum.toString();
        console.log(sum1);
    })
}
getStr(fileArray);

function getFirstNum(line: string) {
    for (let i = 0; line.length; i++) {
        let num = Number(line[i])
        if (!isNaN(num)) {
            return num;
        }
    }
}

function getLastNum(line: string) {
    for (let i = line.length - 1; i >= 0; i--) {
        let num = Number(line[i]);
        if (!isNaN(num)) {
            return num;
        }
    }
}

function getSum(data: string[]): number {
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