// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let coins = [];

for(let i = 1; i <= n; i++){
  let coin = Number(input[i]);
  coins.push(coin);
}

coins.sort((a, b) => b - a);
let result = 0;

for(let coin of coins){
  result += parseInt(k / coin);  
  k %= coin; 
}
console.log(result);