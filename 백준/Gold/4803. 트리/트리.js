let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
let testCase = 1;

function isCycle(x, prev, visited, graph){
  visited[x] = true;

  for(let y of graph[x]){
    if(!visited[y]){
      if(isCycle(y, x, visited, graph)) return true;
    }
    else if(y !== prev) return true;
  }
  return false;
}
while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if(n === 0 && m === 0) break;

  let graph = [];
  
  for(let i = 1; i <= n; i++) graph[i] = [];
  for(let i = 1; i <= m; i++){
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  let visited = new Array(n + 1).fill(false);
  let cnt = 0;
  
  for(let i = 1; i <= n; i++){
    if(!visited[i]){
      if(!isCycle(i, 0, visited, graph)) cnt++;
    }
  }
  if(cnt === 0) console.log(`Case ${testCase}: No trees.`);
  else if(cnt === 1) console.log(`Case ${testCase}: There is one tree.`);
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
  line += m + 1;
  testCase++;
}

