let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let arr = [];

for(let i = 0; i < n; i++) arr[i] = [];

for(let i = 1; i <= n; i++){
  let a = input[i].split("").map(Number);
  arr[i - 1] = a;
}
let danji = 0;

let result = [];
let cnt = 0;

function dfs(x, y){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;
  
  if(arr[x][y] === 1){
    cnt++;
    arr[x][y] = 0;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
    return true;
  }
  return false; 
}

for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(dfs(i, j)){
      danji++
      result.push(cnt);
      cnt = 0;
    };
  }
  cnt = 0;
}
console.log(danji);
result.sort((a, b) => a - b);
for(let x of result){
  console.log(x);
}