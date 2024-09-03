let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let start = 1;
let result = [];

for(let i = 0; i < testCase; i++){
  let sawon = Number(input[start]);
  let people = [];
  let cnt = 0;
  start++;
  
  for(let j = start; j < sawon + start; j++){
    let [a, b] = input[j].split(" ").map(Number);
    people.push([a, b]);
  }
  start += people.length; 
  people.sort((a, b) => a[0] - b[0])

  let minValue = 100001;

  for(let [x, y] of people){
    if(y < minValue){
      minValue = y;
      cnt++;
    }
  }
  result.push(cnt);
}

for(let value of result) console.log(value);
