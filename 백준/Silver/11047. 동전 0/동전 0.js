let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let money = [];

for(let i = 1; i <= n; i++){
  let num = Number(input[i]);
  money.push(num);
}

money.sort((a, b) => b - a);
let cnt = 0;

for(let mon of money){
  if(k >= mon){
    cnt += parseInt(k / mon);
    k = k % mon;
  }
}
console.log(cnt)