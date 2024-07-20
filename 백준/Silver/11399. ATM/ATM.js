let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let number = input[1].split(" ").map(Number);


number.sort((a, b) => a - b);

let curr = 0;
let answer = 0;

for(let i = 0; i < number.length; i++){
  curr = curr + number[i];
  answer += curr;
}
console.log(answer);

