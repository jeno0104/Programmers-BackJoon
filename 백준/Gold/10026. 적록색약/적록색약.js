let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let notSackyakArr= [];
let sackyakArr= [];


for(let i = 0; i < n; i++){
  notSackyakArr[i] = [];
  sackyakArr[i] = [];
}

for(let i = 1; i <= n; i++){
  let value = input[i].split("");
  notSackyakArr[i - 1] = value;
  sackyakArr[i - 1] = [...value];
}

let sackyakCnt = 0;
let notSackyakCnt = 0;



function notSackyakFindRDfs(n, x, y, notSackyakArr){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if(notSackyakArr[x][y] === "R"){
    notSackyakArr[x][y] = notSackyakCnt;
    notSackyakFindRDfs(n, x - 1, y, notSackyakArr);
    notSackyakFindRDfs(n, x + 1, y, notSackyakArr);
    notSackyakFindRDfs(n, x, y - 1, notSackyakArr);
    notSackyakFindRDfs(n, x, y + 1, notSackyakArr);
    return true;
  }
  return false;
}
function notSackyakFindGDfs(n, x, y, notSackyakArr){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if(notSackyakArr[x][y] === "G"){
    notSackyakArr[x][y] = notSackyakCnt;
    notSackyakFindGDfs(n, x - 1, y, notSackyakArr);
    notSackyakFindGDfs(n, x + 1, y, notSackyakArr);
    notSackyakFindGDfs(n, x, y - 1, notSackyakArr);
    notSackyakFindGDfs(n, x, y + 1, notSackyakArr);
    return true;
  }
  return false;
}
function notSackyakFindBDfs(n, x, y, notSackyakArr){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if(notSackyakArr[x][y] === "B"){
    notSackyakArr[x][y] = notSackyakCnt;
    notSackyakFindBDfs(n, x - 1, y, notSackyakArr);
    notSackyakFindBDfs(n, x + 1, y, notSackyakArr);
    notSackyakFindBDfs(n, x, y - 1, notSackyakArr);
    notSackyakFindBDfs(n, x, y + 1, notSackyakArr);
    return true;
  }
  return false;
}
// ----------------------------------
function sackyakFindRGDfs(n, x, y, arr){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;

  if(arr[x][y] === "R" || arr[x][y] === "G"){
    arr[x][y] = sackyakCnt;
    sackyakFindRGDfs(n, x - 1, y, arr);
    sackyakFindRGDfs(n, x + 1, y, arr);
    sackyakFindRGDfs(n, x, y - 1, arr);
    sackyakFindRGDfs(n, x, y + 1, arr);
    return true;
  }
  return false;
}
function sackyakFindBDfs(n, x, y, arr){
  if(x <= -1 || x >= n || y <= -1 || y >= n) return false;
  if(arr[x][y] === "B"){
    arr[x][y] = sackyakCnt;
    sackyakFindBDfs(n, x - 1, y, arr);
    sackyakFindBDfs(n, x + 1, y, arr);
    sackyakFindBDfs(n, x, y - 1, arr);
    sackyakFindBDfs(n, x, y + 1, arr);
    return true;
  }
  return false;
}


for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(notSackyakFindRDfs(n, i, j, notSackyakArr)) notSackyakCnt++;
    if(notSackyakFindGDfs(n, i, j, notSackyakArr)) notSackyakCnt++;
    if(notSackyakFindBDfs(n, i, j, notSackyakArr)) notSackyakCnt++;
  }
}
for(let i = 0; i < n; i++){
  for(let j = 0; j < n; j++){
    if(sackyakFindRGDfs(n, i, j, sackyakArr)) sackyakCnt++;
    if(sackyakFindBDfs(n, i, j, sackyakArr)) sackyakCnt++;
  }
}

console.log(notSackyakCnt, sackyakCnt);