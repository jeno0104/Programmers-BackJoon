let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let total = Number(input[0]);

let answer = 0;


while(total > 0){
  if(total % 5 === 0){
    answer += parseInt(total / 5);
    break;
  } 
  else{
    total -= 3;
    answer++;
  }
}

if(total < 0){
  console.log(-1);
}
else{
  console.log(answer);
}

