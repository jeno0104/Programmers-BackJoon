let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let word = input[0].split(" ");
let answer = 0;

for(let i = 0; i < word.length; i++){
  if(word[i] !== ""){
    answer += 1;
  }
}

console.log(answer);