/*
Link: https://adventofcode.com/2020/day/1
Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

const fs = require("fs");
const path = require("path");

const getInput = () => {
  const filePath = path.join(path.dirname(__dirname), "01", "input.js");
  let input = fs.readFileSync(filePath, "utf-8");
  input = input.split("\n").map((value) => parseInt(value, 10));
  return input;
};

const multiplyPair = () => {
  let result = 0,
    numbers = getInput();
  numbers = numbers.filter((number) => number <= 2020);
  for ([index, firstPair] of numbers.entries()) {
    const otherPair = 2020 - firstPair;
    numbers = numbers.filter((number, currentIndex) => currentIndex !== index);
    const pairFound = numbers.find((number) => number === otherPair);
    if (pairFound) {
      result = firstPair * otherPair;
      break;
    }
  }
  return result;
};
