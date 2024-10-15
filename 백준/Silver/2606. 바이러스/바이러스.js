let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0])
let m = Number(input[1]);
let arr = new Array(n + 1).fill(0).map(() => []);
let visited = new Array(n + 1).fill(false);
let cnt = 0;

function dfs(arr, v, visited){
  visited[v] = true;
  cnt++;
  
  for(let x of arr[v]){
    if(!visited[x]){
      dfs(arr, x, visited);
    }
  }
}

for(let i = 2; i < m + 2; i++){
  let [x, y] = input[i].split(" ").map(Number);
  arr[x].push(y);
  arr[y].push(x);
}
dfs(arr, 1, visited);

console.log(cnt - 1);