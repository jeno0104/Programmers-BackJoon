let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let number = [];

for(let i = 0; i < 9; i++){
  number.push(Number(input[i]));
}

let max = number.reduce((a, b) => Math.max(a, b));

for(let i = 0; i < number.length; i++){
  if(number[i] === max){
    console.log(max);
    console.log(i + 1);
    break;
  }
}

