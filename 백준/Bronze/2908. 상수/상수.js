let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let [a, b] = input[0].split(" ");


b = Number(b[2] + b[1] + b[0]);
a = Number(a[2] + a[1] + a[0]);


if(a > b){
  console.log(a);
}
else{
  console.log(b);
}