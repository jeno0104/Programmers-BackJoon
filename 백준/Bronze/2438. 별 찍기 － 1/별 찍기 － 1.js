let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let n = Number(input[0]);

for(let i = 1; i < n + 1; i++){
  let star = ""
  for(let j = 0; j < i; j++){
    star += "*";
  }
  console.log(star);
}