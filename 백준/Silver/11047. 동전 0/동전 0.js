let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, money] = input[0].split(" ").map(Number);
let coins = [];

for(let i = 1; i <= n; i++){
  coins.push(Number(input[i]));
}
let answer = 0;

for(let i = n - 1; i >= 0; i--){
  answer += parseInt(money / coins[i]);
  money %= coins[i];
}

console.log(answer)