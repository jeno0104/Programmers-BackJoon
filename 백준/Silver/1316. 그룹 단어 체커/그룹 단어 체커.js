let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let n = Number(input[0]);
let answer = 0;

function check(data){
  let wordChecker = new Set(data[0]);
  for(let i = 0; i < data.length - 1; i++){
    if(data[i] !== data[i + 1]){
      if(wordChecker.has(data[i + 1])){
        return false;
      }
      else{
        wordChecker.add(data[i + 1]);
      }
    }
  }
  return true;
}

for(let i = 1; i <= n; i++){
  if(check(input[i])){
    answer += 1;
  }
}

console.log(answer);