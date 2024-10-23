let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
let selected = [];
let answer = "";

for(let i = 1; i <= n; i++) arr.push(i);

function dfs(arr, depth){
  if(depth === m){
    let result = [];
    for(let x of selected) result.push(arr[x]);
    for(let i = 0; i < result.length - 1; i++){
      if(result[i] <= result[i + 1]) continue;
      else return;
    }
    for(let x of result) answer += x + " ";
    answer += "\n";
    return;
  }

  for(let i = 0; i < n; i++){
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }

}
dfs(arr, 0);
console.log(answer);