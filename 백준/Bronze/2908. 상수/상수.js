let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [first, second] = input[0].split(" ");

let new_first = "";
let new_second = "";

for(let i = first.length - 1; i >= 0; i--){
  new_first += first[i];
  new_second += second[i];
}

if(Number(new_first) > Number(new_second)){
  console.log(Number(new_first));
}
else{
  console.log(Number(new_second));
}
