let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input.map(Number);

let setData = new Set();

for(let i = 0; i < 10; i++){
  setData.add(data[i] % 42);
}

console.log(setData.size);