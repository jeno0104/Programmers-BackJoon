let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let answer = "";
for(let i = 0; i < n; i++){
  let [a, b] = input[i + 1].split(" ").map(Number);
  answer += a + b + "\n";
}

console.log(answer);