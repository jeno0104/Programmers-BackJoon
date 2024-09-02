let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");


let testCase = Number(input[0]);
let result = "";
for(let i = 1; i <= testCase; i++){
  let [cnt, values] = input[i].split(" ");
  let newValues = values.split("");
  for(let j = 0; j < newValues.length; j++){
    let alpha = newValues[j];
    
    for(let k = 0; k < Number(cnt); k++){
      result += alpha;
    }
  }
  console.log(result)
  result = ""
}

