let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
let visited = new Array(n).fill(false);
let selected = [];

for (let i = 1; i <= n; i++) arr.push(i);
let answer = "";

function dfs(arr, depth) {
  if (depth === m) {
    let result = [];

    for (let i of selected) {
      result.push(arr[i]);
    }
    let flag = result.length === 1 ? true : false;

    if (flag) {
      for (let x of result) answer += x + " ";
      answer += "\n";
      return;
    } else {
      for (let i = 0; i < result.length - 1; i++) {
        if (result[i] < result[i + 1]) continue;
        else return;
      }
      for (let x of result) answer += x + " ";
      answer += "\n";
      return;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);
