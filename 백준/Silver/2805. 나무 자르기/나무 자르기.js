let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 1;
let end = Math.max(...arr);
let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let summary = 0;

  for (let i = 0; i < arr.length; i++) {
    let newX = arr[i] - mid;
    if (newX > 0) {
      summary += newX;
    }
  }
  if (summary >= m) {
    answer = Math.max(answer, mid)
    start = mid + 1;
  } 
  else{
    end = mid - 1;
  }
}
console.log(answer);
