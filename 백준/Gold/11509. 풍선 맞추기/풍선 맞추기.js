let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let bl = input[1].split(" ").map(Number);


let arrow = new Array(n + 1).fill(0);
let result = 0;
for(let i of bl){
  if(arrow[i] > 0){ 
    arrow[i] -= 1;
    arrow[i - 1] += 1;
  }
  else{
    arrow[i - 1] += 1;
    result += 1;
  }
}

console.log(result)