let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let lengths = input[1].split(" ").map(Number);
let prices = input[2].split(" ").map(Number);
let newPrices = [];
let answer = 0;
let totalLength = 0;
for(let i = 0; i < prices.length - 1; i++){
  newPrices.push(prices[i]);
  totalLength += lengths[i];
}

newPrices.sort((a, b) => a - b);

for(let i = 0; i < newPrices.length; i++){
  if(newPrices[0] === prices[i]){
    answer += newPrices[0] * totalLength;
    break;
  }
  else{
    answer += prices[i] * lengths[i];
    totalLength -= lengths[i];
  }
}
console.log(answer);
