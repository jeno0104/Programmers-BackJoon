let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for(let i = 2; i <= 40; i++){
  d[i] = d[i - 1] + d[i - 2];
}
let testCase = Number(input[0]);

for(let t = 1; t <= testCase; t++){
  let n = Number(input[t]);

  if(n === 0) console.log(1, 0);
  else console.log(d[n - 1], d[n]);
}