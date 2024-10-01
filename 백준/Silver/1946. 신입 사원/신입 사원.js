let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = input[0];
let start = 1;

for(let i = 0; i < testCase; i++){
  let newEm = [];
  let answer = 1;
  let n = Number(input[start]);

  for(let j = start + 1; j <= start + n; j++){
    let [a, b] = input[j].split(" ").map(Number);
    newEm.push([a, b]);
  }
  
  newEm.sort((a, b) => a[0] - b[0]);
  let min = newEm[0][1];
  
  for(let k = 1; k < newEm.length; k++){
    if(newEm[k][1] < min){
      min = newEm[k][1];
      answer++;
    }
  }
  start += n + 1;
  console.log(answer);
}
