let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [h, m] = input[0].split(" ").map(Number);
m -= 45;
if(m < 0){
  m += 60;
  if(h === 0){
    h = 23;
  }
  else if(h !== 0){
    h -= 1;
  }
}

console.log(`${h} ${m}`);