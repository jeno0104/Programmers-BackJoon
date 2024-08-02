let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for(let i = 1; i <= n; i++) arr.push(i);

let selected = [];
let visited = [];

let answer = "";

function dfs(arr, depth){
  if(depth === n){
    let result = [];
    for(let x of selected) result.push(arr[x]);
    for(let i of result) answer += i + " ";
    answer += "\n";
    return;
  }
  for(let i = 0; i < arr.length; i++){
    if(visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
