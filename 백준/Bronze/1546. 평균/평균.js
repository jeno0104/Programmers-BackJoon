let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let score = input[1].split(" ").map(Number);


let max = Math.max(...score);

score = score.map(num => (num / max) * 100);

let sum = 0;

for(let i = 0; i < score.length; i++){
  sum += score[i];
}

console.log((sum / n).toFixed(2))