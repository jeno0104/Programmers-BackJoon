let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let score = input[1].split(" ").map(Number);


let maxValue = score.reduce((a, b) => Math.max(a, b));

for(let i = 0; i < n; i++){
  score[i] = score[i] / maxValue * 100;
}
let summary = 0;
for(let i = 0; i < n; i++){
  summary += score[i];
}

console.log((summary / n).toFixed(2));