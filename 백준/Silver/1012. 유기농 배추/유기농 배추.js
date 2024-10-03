let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let start = 1;

function dfs(graph, n, m, x, y){
  if(x <= -1 || x >= n || y <= -1 || y >= m){
    return false;
  }

  if(graph[x][y] == 1){
    graph[x][y] = -1;

    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
}

for(let i = 0; i < testCase; i++){
  let [m, n, k] = input[start].split(" ").map(Number);
  start++;
  let graph = [];
  
  for(let a = 0; a < n; a++){
    graph[a] = new Array(m);
  }
  
  for(let j = start; j < start + k; j++){
    let [y, x] = input[j].split(" ").map(Number);
    graph[x][y] = 1;
  }
  let answer = 0;

  for(let b = 0; b < n; b++){
    for(let c = 0; c < m; c++){
      if(dfs(graph, n, m, b, c)) answer++;
    }
  }
  start += k;
  console.log(answer);
}
