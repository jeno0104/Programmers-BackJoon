let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let splitMinus = input[0].split("-");

let answer = 0;

for(let i = 0; i < splitMinus.length; i++){
  let curr = splitMinus[i].split("+").map(Number).reduce((a, b) => a + b);

  if(i === 0){
    answer += curr;
  }
  else{
    answer -= curr;
  }
}

console.log(answer)