let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

for(let i = 1; i <= n; i++){
  let score = input[i].split(" ").map(Number);
  let sum = 0; 
  let avg = 0;
  let cnt = 0;
  
  for(let j = 1; j <= score[0]; j++){
    sum += score[j];
  }
  avg = sum / score[0];

  for(let j = 1; j <= score[0]; j++){
    if(score[j] > avg){
      cnt += 1;
    }
  }
  
  console.log(`${((100 / score[0]) * cnt).toFixed(3)}%`);
}