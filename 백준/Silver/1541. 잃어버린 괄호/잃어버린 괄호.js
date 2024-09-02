let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let strings = input[0];

let newStrings = strings.split("-");
let values = [];
for(let i = 0; i < newStrings.length; i++){
  let news = newStrings[i].split("+").map(Number);
  let sum = news.reduce((a, b) => a + b);
  values.push(sum);
}

if(values.length === 1){
  console.log(values[0]);
}
else{
  let result = values.reduce((a, b) => a + b);
  console.log(values[0] * 2 - result);
}