let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let answer = 1;
let flag = false;

while(a <= b){
  if(a === b){
    flag = true;
    break;
  }
  if(b % 2 === 0) b = parseInt(b / 2);
  else if(b % 10 === 1) b = parseInt(b / 10);
  else break;
  
  answer += 1;
}
if(flag) console.log(answer);
else console.log(-1);


