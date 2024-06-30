let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let h = Number(input[0].split(" ")[0]);
let m = Number(input[0].split(" ")[1]);

let plusMinute = Number(input[1]);

let totalMinute = h * 60 + m + plusMinute;

totalMinute %= 1440;

let hour = parseInt(totalMinute / 60);
let minute = totalMinute % 60;

console.log(`${hour} ${minute}`);
