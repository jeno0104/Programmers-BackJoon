let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let result = 0;

while(n > 0){
  if(n % 5 === 0){
    n -= 5;
    result += 1;
  }
  else{
    n -= 3;
    result += 1;
  }
}

if(n === 0){
  console.log(result);
}
else{
  console.log(-1);
}