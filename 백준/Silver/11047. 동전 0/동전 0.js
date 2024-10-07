let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = [];

for(let i = 1; i <= n; i++){
  arr.push(Number(input[i]));
}
let answer = 0;

arr.sort((a, b) => b - a);

for(let value of arr){
  answer += parseInt(k / value);
  k = k % value;
}
console.log(answer);