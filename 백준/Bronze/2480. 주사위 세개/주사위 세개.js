let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [one, two, three] = input[0].split(" ").map(Number);

if(one === two && one === three && two === three){
  console.log(10000 + one * 1000);
}
else if(one !== two && one !== three && two !== three){
  console.log(Math.max(one, two, three) * 100);
}
else{
  if(one === two){
    console.log(1000 + one * 100);
  }
  else if(one === three){
    console.log(1000 + one * 100);
  }
  else if(two === three){
    console.log(1000 + two * 100);
  }
}