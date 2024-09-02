let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let n = Number(input[0]);
let users = input[1].split(" ").map(Number);

users.sort((a, b) => a - b);

let curr = 0;
let result = 0;
for(let i = 0; i < users.length; i++){
  curr += users[i];
  result += curr;
}

console.log(result);
