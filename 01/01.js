const fs = require('fs');
const readline = require('readline');

let sum = 0;

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    let lineArray = line.split("");
    let calibrationValue = []

    for (symbol of lineArray) {
        if (!isNaN(symbol)) {
            calibrationValue.push(symbol)
            break;
        }
    }

    let reversedLineArray = lineArray.reverse();
    for (symbol of reversedLineArray) {
        if (!isNaN(symbol)) {
            calibrationValue.push(symbol)
            break;
        }
    }
    let calibration = calibrationValue[0] + calibrationValue[1]
    sum = sum + parseInt(calibration);
  }
}

async function sumAll() {
    await processLineByLine();
    console.log(sum)
}

sumAll();
