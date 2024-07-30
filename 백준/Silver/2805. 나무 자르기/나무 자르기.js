let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let namu = input[1].split(" ").map(Number);

let start = 0;
let end = namu.reduce((a, b) => Math.max(a, b));
let result = 0;

while(start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  
  for(let i = 0; i < namu.length; i++){
    if(namu[i] > mid){
      total += namu[i] - mid;
    }
  }
  if(total < m) end = mid - 1;
  else{
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
