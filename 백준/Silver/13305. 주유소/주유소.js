let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let lengths = input[1].split(" ").map(Number);
let prices = input[2].split(" ").map(Number);

let minPrice = prices[0];

for(let i = 0; i < n; i++){
  minPrice = Math.min(minPrice, prices[i]);
  prices[i] = minPrice;
}
let answer = BigInt(0);
for(let i = 0; i < n - 1; i++){
  answer += BigInt(prices[i]) * BigInt(lengths[i]);
}
console.log(String(answer))
