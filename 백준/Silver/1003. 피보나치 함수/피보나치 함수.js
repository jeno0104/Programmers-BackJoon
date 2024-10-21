let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let dp = new Array(100).fill(0);

dp[0] = 0;
dp[1] = 1;

for(let i = 2; i < 100; i++){
  dp[i] = dp[i - 1] + dp[i - 2];
}

let testCase = Number(input[0]);

for(let i = 1; i <= testCase; i++){
  let number = Number(input[i]);
  if(number === 0) console.log(1, 0);
  else console.log(dp[number - 1], dp[number])
}