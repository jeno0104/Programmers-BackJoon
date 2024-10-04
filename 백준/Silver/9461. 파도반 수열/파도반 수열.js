let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

let arr = [];

for(let i = 1; i <= testCase; i++){
  arr.push(Number(input[i]))
}

let dp = new Array(100).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 1;
dp[3] = 2;
dp[4] = 2;
for(let i = 5; i < 100; i++){
  dp[i] = dp[i - 5] + dp[i - 1];
}

for(let i = 1; i <= testCase; i++){
  let num = Number(input[i]);

  console.log(dp[num - 1]);
}
