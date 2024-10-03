let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let arr = [];

for (let i = 1; i <= n; i++) {
  let a = Number(input[i]);
  arr.push(a);
}
let start = 1;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let summary = 0;

  for (let x of arr) {
    if (x >= mid) summary += parseInt(x / mid);
  }
  if (summary < k) {
    end = mid - 1;
  } else {
    start = mid + 1;
    result = Math.max(result, mid);
  }
}
console.log(result);
