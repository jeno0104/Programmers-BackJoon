let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let computers = Number(input[1]);
let visited = new Array(n + 1).fill(false);

let connectedCom = Array.from({ length: n + 1 }, () => []);
let cnt = 0;

for(let i = 0; i < computers; i++){
  let [x, y] = input[i + 2].split(" ").map(Number);
  connectedCom[x].push(y);
  connectedCom[y].push(x);

}
function dfs(arr, v, visited){
  visited[v] = true;
  cnt += 1;

  for(let i of arr[v]){
    if(!visited[i]){
      dfs(arr, i, visited); 
    }
  }
}

dfs(connectedCom, 1, visited);

console.log(cnt - 1);