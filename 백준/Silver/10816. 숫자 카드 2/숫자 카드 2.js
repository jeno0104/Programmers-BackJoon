let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arrA = input[1].split(" ").map(Number);
let m = Number(input[2]);
let findNumber = input[3].split(" ").map(Number);
arrA.sort((a, b) => a - b);

function lower(arrA, x) {
  let start = 0;
  let end = arrA.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (arrA[mid] >= x) end = mid - 1;
    else start = mid + 1;
  }
  return end;
}
function upper(arrA, x) {
  let start = 0;
  let end = arrA.length - 1;
  let mid = 0;
  let answer = 0;

  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (arrA[mid] > x) end = mid - 1;
    else start = mid + 1;
  }
  return end;
}
let answer = [];
for (let i = 0; i < findNumber.length; i++) {
  let upperValue = upper(arrA, findNumber[i]);
  let lowerValue = lower(arrA, findNumber[i]);

  answer.push(upperValue - lowerValue);
}

console.log(answer.join(" "));
