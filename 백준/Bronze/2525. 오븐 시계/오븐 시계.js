let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [h, m] = input[0].split(" ").map(Number);
let plusMinute = Number(input[1]);

let totalMinute = h * 60 + m + plusMinute;

h = parseInt(totalMinute / 60);
m = parseInt(totalMinute % 60);
if(h > 23){
  h -= 24;
}


console.log(`${h} ${m}`);