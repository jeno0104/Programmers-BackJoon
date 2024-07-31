let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let lines = [];

for(let i = 1; i <= n; i++){
  let line = Number(input[i]);
  lines.push(line);
}

let maxLine = lines.reduce((a, b) => Math.max(a, b));
let start = 0;
let end = maxLine;
let result = 0;

while(start <= end){
  let mid = parseInt((start + end) / 2);  
  let totalLine = 0;
  
  for(let i = 0; i < n; i++){
    totalLine += parseInt(lines[i] / mid);
  }
  
  if(totalLine < k){
    end = mid - 1;
  }
  else{
    start = mid + 1; 
    result = mid;
  }
}

console.log(result)